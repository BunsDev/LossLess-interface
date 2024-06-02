import Image from "next/image";
import React from "react";

const EmptyPage = () => {
  return (
    <div className="absolute top-[40%] left-0 right-0">
      <Image
        src={"/images/emptyBox.gif"}
        alt=""
        width={200}
        height={200}
        className="block  mx-auto"
      />
      <p className="text-[#C9E4CA] text-center text-2xl font-semibold">You do not have any NFT to Auction</p>
    </div>
  );
};

export default EmptyPage;