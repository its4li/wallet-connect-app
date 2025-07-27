import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Sidebar from "../components/Sidebar";
import { Button } from "../components/ui/button";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("لطفاً MetaMask را نصب کنید.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
      setWalletConnected(true);
    } catch (err) {
      console.error("خطا در اتصال کیف پول:", err);
    }
  };

  useEffect(() => {
    const checkWallet = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setWalletConnected(true);
        }
      }
    };
    checkWallet();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Finvest</h1>

        {!walletConnected ? (
          <Button onClick={connectWallet}>اتصال کیف پول</Button>
        ) : (
          <div className="bg-[#222] p-4 rounded-xl mt-4">
            <p className="text-green-500 font-bold">کیف پول متصل شد ✅</p>
            <p className="text-sm mt-2 break-words">{walletAddress}</p>
          </div>
        )}
      </main>
    </div>
  );
}
