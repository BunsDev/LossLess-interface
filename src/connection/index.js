"use client"
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN = 43113;

export const Avalanche_ID = 43113;



const Avalanche_Fuji = {
  chainId: Avalanche_ID,
  name: "Avalanche Fuji Testnet",
  currency: "AVAX",
  explorerUrl: "https://testnet.snowtrace.io",
  rpcUrl:  process.env.NEXT_PUBLIC_RPC_URL,
};

const metadata = {
  name: "LossLess",
  description:`This is a no loss bidding Platform`,
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [Avalanche_Fuji],
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
    });

    export function Web3Modal({ children }) {
      return children
    }