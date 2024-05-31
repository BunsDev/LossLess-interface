import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";
import { getAuctionNFTContract } from "@/constants/contracts";

export const useApproveAuctionContract = () =>{
    const auctionContractAddress = process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async(contractAddress: string, tokenId: number)=>{

        if(!isSupportedChain(chainId)) return console.error("Wrong network");

        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getAuctionNFTContract(signer,contractAddress );

        const loadingToast1 = toast.loading('Approving Auction');

        try {

            const transaction = await contract.approve(auctionContractAddress, tokenId);
            
            const receipt = await transaction.wait();

            toast.remove(loadingToast1)

            toast.success(`Approval Successful`)

            return receipt

        } catch (error: any) {

            toast.remove(loadingToast1)
            
            toast.error(error.reason)

            console.error(error)

        }
        
    }, [chainId, walletProvider]);
}