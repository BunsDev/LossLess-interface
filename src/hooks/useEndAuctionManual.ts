import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";


export const useEndAuctionManual = (bid: Number, auctionId: Number) =>{
    const { chainId, address } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async()=>{
        if(!isSupportedChain(chainId)) return console.error("Wrong network");

        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getAuctionContract(signer);

        try {
            const transaction = await contract.endAuctionManual( auctionId);
            
            const receipt = await transaction.wait();
            
            return receipt
        } catch (error) {
            console.error(error)
        }
    }, [chainId, walletProvider]);
}