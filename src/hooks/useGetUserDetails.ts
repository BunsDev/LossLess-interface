import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuthorizationContract } from "../constants/contracts";

export const useGetUserDetails = (address: string) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}})

    useEffect(()=>{
        let userDetails;
        (async () => {

        try {
            const contract = getAuthorizationContract(readOnlyProvider)
            const user = await contract.getUserDetails(address)
            console.log(user)
            userDetails = {

            }
        } catch (error) {
            console.error(error);
        } finally{
            setData({loading: false, data: userDetails})
        }
    })();
    }, [])
    return data 
}