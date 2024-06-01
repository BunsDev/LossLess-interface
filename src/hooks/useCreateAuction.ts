import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";

export const useCreateAuction = () =>{
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async(startingTime: number, endingTime: number, startingBid: number, nftTokenId: number, nftContractAddress: string, imageURI: string)=>{

        if(!isSupportedChain(chainId)) return console.error("Wrong network");

        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getAuctionContract(signer);

        const loadingToast1 = toast.loading('Creating auction');

        try {

            const transaction = await contract.createAuction(startingTime, endingTime, startingBid, nftTokenId, nftContractAddress, imageURI);
            
            const receipt = await transaction.wait();

            toast.remove(loadingToast1)

            toast.success(`Auction Creation Successful`)

            return receipt

        } catch (error: any) {

            toast.remove(loadingToast1)
            
            toast.error(error.reason)

            console.error(error)

        }
        
    }, [chainId, walletProvider]);
}