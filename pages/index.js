import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <Card className="max-w-md w-full p-4 shadow-xl rounded-2xl">
        <CardContent className="space-y-4">
          <h1 className="text-xl font-bold text-center">سایت اتصال کیف پول</h1>

          {!walletConnected ? (
            <Button onClick={connectWallet} className="w-full">
              اتصال کیف پول
            </Button>
          ) : (
            <div className="text-center">
              <p className="text-green-600 font-semibold">کیف پول متصل شد ✅</p>
              <p className="text-sm text-gray-700 break-words mt-2">{walletAddress}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
