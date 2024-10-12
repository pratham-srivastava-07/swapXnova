import { Connection, Keypair, VersionedTransaction, PublicKey } from '@solana/web3.js';
import axios from 'axios';
import bs58 from 'bs58';

interface SwapResponse {
  txid: string;
  solscanUrl: string;
}

// Custom Wallet class using Keypair
class CustomWallet {
  constructor(private readonly payer: Keypair) {}

  get publicKey(): PublicKey {
    return this.payer.publicKey;
  }

  signTransaction(transaction: VersionedTransaction): VersionedTransaction {
    transaction.sign([this.payer]);
    return transaction;
  }

  signAllTransactions(transactions: VersionedTransaction[]): VersionedTransaction[] {
    return transactions.map((tx) => {
      tx.sign([this.payer]);
      return tx;
    });
  }
}

export async function solanaSwap(
  inputMint: string,
  outputMint: string,
  amount: number,
  slippageBps: number
): Promise<SwapResponse> {
  // Initialize connection to Solana mainnet or devnet
  const connection = new Connection('https://api.devnet-beta.solana.com'); 

  // Decode private key from environment variable
  const secretKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
  if (!secretKey) throw new Error('Missing PRIVATE_KEY environment variable.');

  // Create a Keypair from the secret key
  const keypair = Keypair.fromSecretKey(bs58.decode(secretKey));
  const wallet = new CustomWallet(keypair);

  try {
    // Get the quote from Jupiter API
    const { data: quoteResponse } = await axios.get(
      `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&slippageBps=${slippageBps}`
    );
    console.log('Quote Response:', quoteResponse);

    // Execute the swap transaction
    const { data: { swapTransaction } } = await axios.post('https://quote-api.jup.ag/v6/swap', {
      quoteResponse,
      userPublicKey: wallet.publicKey.toString(),
    });

    // Deserialize the swap transaction
    const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
    const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
    if (!transaction) throw new Error('Failed to deserialize transaction.');

    console.log('Deserialized Transaction:', transaction);

    // Sign the transaction
    wallet.signTransaction(transaction);

    // Get the latest block hash for transaction confirmation
    const latestBlockHash = await connection.getLatestBlockhash();

    // Serialize and send the raw transaction
    const rawTransaction = transaction.serialize();
    const txid = await connection.sendRawTransaction(rawTransaction, {
      skipPreflight: true,
      maxRetries: 2,
    });

    // Confirm the transaction on the blockchain
    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: txid,
    });

    console.log(`Transaction successful: https://solscan.io/tx/${txid}`);
    return { txid, solscanUrl: `https://solscan.io/tx/${txid}` };
  } catch (error) {
    console.error('Error during Solana swap:', error);
    throw new Error(`Solana swap failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

