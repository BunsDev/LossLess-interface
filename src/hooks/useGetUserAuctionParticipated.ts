import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";

export const useGetUserAuctionParticipated = (address:string) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}})

    useEffect(()=>{
        let auctionParticipated;
        (async () => {

        try {
            const contract = getAuctionContract(readOnlyProvider)
            const user = await contract.getUserAuctionParticipated(address)
            console.log(user)
            auctionParticipated = {
            }
        } catch (error) {
            console.error(error);
        } finally{
            setData({loading: false, data: auctionParticipated})
        }
    })();
    }, [])
    return data 
}