import { useState, useEffect } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getAuthorizationContract } from "../constants/contracts";

export const useGetUserRegistrationStatus = (address: string | undefined) => {
    const [data, setData] = useState<any | null>({ loading: true, data: false })

    useEffect(() => {
        if (!address) return;

        const fetchRegistrationStatus = async () => {
            try {
                const contract = getAuthorizationContract(readOnlyProvider);
                const isRegistered = await contract.isRegisteredUsers(address);
                setData({ loading: false, data: isRegistered });
            } catch (error) {
                console.error("Error fetching registration status", error);
                setData({ loading: false, data: false });
            }
        };

        fetchRegistrationStatus();
    }, [address]);

    return data;
};
