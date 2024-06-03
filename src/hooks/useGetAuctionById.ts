import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";
import { Description } from "@radix-ui/react-dialog";

export const useGetAuctionById = (auctionId:number) =>{
    const [data, setData] = useState<{ 
      loading: boolean, 
      data: any }>({loading: true, data: {}});

    useEffect(() => {
        const contract = getAuctionContract(readOnlyProvider)
        contract.getAuctionById(auctionId).then((res) => {
            setData({
                loading: false,
                data: {
                  name: res.name,
                  description: res.description,
                  auctionCreator: res.auctionCreator,
                  nftContractAddress: res.nftContractAddress,
                  highestBidder: res.highestBidder,
                  previousBidder: res.previousBidder,
                  startingTime: res.startingTime,
                  endingTime: res.endingTime,
                  nftTokenId: res.nftTokenId,
                  auctionId: res.auctionId,
                  auctionCreatedTime: res.auctionCreatedTime,
                  currentBid: res.currentBid,
                  previousBid: res.previousBid,
                  minValidBid: res.minValidBid,
                  lastInteractor: res.lastInteractor,
                  keeperId: res.keeperId,
                  imageURI: res.imageURI,
                  ended: res.ended
                }
            });
        }).catch((err) => {
            console.error("error fetching auction", err)
        });
    }, [auctionId]);

    return data;
}