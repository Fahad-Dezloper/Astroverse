"use client";
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmi";
import TopBar from './app/components/TopBar';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>  
          <div className='w-full'>
          <TopBar />
          {children}
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
