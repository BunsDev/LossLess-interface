import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";

export const useGetUserAuctionCreated = (address:string) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}})

    useEffect(()=>{
        let auctionCreated;
        (async () => {

        try {
            const contract = getAuctionContract(readOnlyProvider)
            const user = await contract.getUserAuctionCreated(address)
            console.log(user)
            auctionCreated = {
            }
        } catch (error) {
            console.error(error);
        } finally{
            setData({loading: false, data: auctionCreated})
        }
    })();
    }, [])
    return data 
}