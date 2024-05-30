import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";

export const useGetAllAuction = () =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}})

    useEffect(()=>{
        let allAuctions;
        (async () => {

        try {
            const contract = getAuctionContract(readOnlyProvider)
            const user = await contract.getAllAuction()
            console.log(user)
            allAuctions = {

            }
        } catch (error) {
            console.error(error);
        } finally{
            setData({loading: false, data: allAuctions})
        }
    })();
    }, [])
    return data 
}