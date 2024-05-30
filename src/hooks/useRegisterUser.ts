import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getAuthorizationContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";


export const useRegisterUser = (email: string) =>{
    const { chainId, address } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async()=>{
        if(!isSupportedChain(chainId)) return console.error("Wrong network");

        const readWriteProvider = getProvider(walletProvider);

        const signer = readWriteProvider ? await readWriteProvider.getSigner() : null;

        const contract = getAuthorizationContract(signer);

        try {
            const transaction = await contract.registerUser(email);
            
            const receipt = await transaction.wait();

            return receipt;
        } catch (error) {
            console.error(error)
        }
    }, [chainId, walletProvider]);
}