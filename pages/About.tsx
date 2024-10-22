export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <div className="max-w-3xl text-center">
                <h1 className="text-5xl font-extrabold mb-6">
                    About swapXnova
                </h1>
                <p className="text-lg mb-10">
                    Welcome to our decentralized exchange (DEX) built on the Solana blockchain. 
                    Our mission is to provide fast, secure, and efficient token swaps while ensuring 
                    a seamless user experience. Whether you are a crypto enthusiast or a trader, our 
                    platform aims to deliver the best in DeFi innovation.
                </p>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-lg">
                    <div className="bg-gray-900 rounded-lg p-6">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                        <ul className="text-left space-y-3">
                            <li>⚡ Lightning-fast swaps with low fees.</li>
                            <li>🔒 Built on Solana for unmatched scalability.</li>
                            <li>📈 Easy-to-use interface for a smooth trading experience.</li>
                            <li>🚀 Cutting-edge DeFi technology.</li>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-400 mt-10">
                    Our platform is currently under active development, and new features will be rolled out regularly. 
                    Stay tuned for updates and get ready to experience the future of decentralized finance.
                </p>
            </div>
        </div>
    );
}
