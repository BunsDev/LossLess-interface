import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
     {isClient && isConnected ? (
        <w3m-button />
      ) : (
        <Button
          onClick={() => open()}
          variant={"outline"}
          className="bg-[#C9E4CA] rounded-xl text-sm font-semibold"
          translate="no"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}