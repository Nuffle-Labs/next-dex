"use client";

import Swap from "@/components/Swap";
import { useWallet } from "@/components/providers/WalletProvider";

export default function Home() {
  const { address, isConnected } = useWallet();
  
  return <Swap isConnected={isConnected} address={address} />;
}