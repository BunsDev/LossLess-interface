import { useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuctionContract } from "../constants/contracts";

export const useGetUserAuctionParticipated = (address:string) =>{
    const [data, setData] = useState<{ loading: boolean, data: any }>({loading: true, data:{}});

    (() => {
        const contract = getAuctionContract(readOnlyProvider)
        contract.getUserAuctionParticipated(address).then((res) => {
            const auctions = res.map((auction: any) => (
                {
                    name: auction.name,

                    description: auction.description,

                    auctionCreator: auction.auctionCreator,

                    nftContractAddress: auction.nftContractAddress,

                    hightestBidder: auction.hightestBidder,

                    previousBidder: auction.previousBidder,

                    startingTime: auction.startingTime,

                    endingTime: auction.endingTime,

                    nftTokenId: auction.nftTokenId,

                    auctionId: auction.auctionId,

                    auctionCreatedTime: auction.auctionCreatedTime,

                    currentBid: auction.currentBid,

                    previousBid: auction.previousBid,

                    minValidBid: auction.minValidBid,

                    lastInteractor: auction.lastInteractor,

                    keeperId: auction.keeperId,

                    imageURI: auction.imageURI,

                    ended: auction.ended
                }
            ));
            setData({
                loading: false,
                data: auctions
            });
        }).catch((err) => {
            console.error("error fetching auctions", err)
        });
    })()
    return data 
}