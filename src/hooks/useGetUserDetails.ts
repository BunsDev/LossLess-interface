import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuthorizationContract } from "../constants/contracts";

export const useGetUserDetails = (address: string) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}});

    (() => {
        const contract = getAuthorizationContract(readOnlyProvider)
        contract.getUserDetails(address).then((res) => {
            setData({
                loading: false,
                data: res
            });
        }).catch((err) => {
            console.error("error fetching bidders", err)
        });
    })()
    return data 
}