import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";

export const useGetAuctionById = (auctionId:number) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}});

    (() => {
        const contract = getAuctionContract(readOnlyProvider)
        contract.getAuctionById(auctionId).then((res) => {
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