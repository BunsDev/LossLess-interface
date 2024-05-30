import { useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";

export const useGetAuctionBidder = (auctionId: Number) => {
    const [data, setData] = useState<{ loading: boolean, data: any }>({ loading: true, data: [] });

    (() => {
        const contract = getAuctionContract(readOnlyProvider)
        contract.getAunctionBidder(auctionId).then((res) => {

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