import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getAuthorizationContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";
import { redirect } from 'next/navigation'


export const useRegisterUser = () =>{

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async(email:string)=>{

        if(!isSupportedChain(chainId)) return console.error("Wrong network");

        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getAuthorizationContract(signer);

        const loadingToast1 = toast.loading('Registering mail');

        try {

            const transaction = await contract.registerUser(email);
            
            const receipt = await transaction.wait();

            console.log(receipt.status)

            toast.remove(loadingToast1)

            toast.success(`Registration Successful`)

            if(receipt.status === 1 ){

                redirect('/dashboard');
            
            }

            return receipt;

        } catch (error: any) {
            
            toast.remove(loadingToast1)
            
            toast.error(error.reason)

            console.error(error)
        
        }
        
    }, [chainId, walletProvider]);
}