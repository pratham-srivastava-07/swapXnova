import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function AdapterButton() {
    return <div>
        <div className="flex justify-center items-center">
            <div className="flex justify-between space-x-5">
                <div><WalletMultiButton /></div>
                <div><WalletDisconnectButton/></div>
            </div>
        </div>
    </div>
}