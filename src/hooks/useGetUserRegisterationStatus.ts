import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuthorizationContract } from "../constants/contracts";

export const useGetUserRegisterationStatus = (address: string) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}})

    useEffect(()=>{
        let user;
        (async () => {

        try {
            const contract = getAuthorizationContract(readOnlyProvider)
            user = await contract.isRegisteredUsers(address)
            console.log(user)
        } catch (error) {
            console.error(error);
        } finally{
            setData({loading: false, data: user})
        }

    })();

    }, [])
    return data
}