import { ethers } from "ethers";
import auctionABI from "./auctionContractABI.json"
import authorizationABI from "./authorizationABI.json"
import auctionNFTABI from "./auctionNFTABI.json"

export const getAuctionContract = (providerOrSigner)=>
    new ethers.Contract(
        process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS,
        auctionABI,
        providerOrSigner
    )


export const getAuthorizationContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.NEXT_PUBLIC_AUTHORIZATION_CONTRACT_ADDRESS,
        authorizationABI,
        providerOrSigner
    )

export const getAuctionNFTContract = (providerOrSigner, contractAddress) =>
    new ethers.Contract(
        contractAddress,
        auctionNFTABI,
        providerOrSigner
    )