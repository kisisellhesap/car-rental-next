import Link from "next/link";
import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

const Cancel = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-104px)]">
      <div className="bg-[#FA2C37] h-[50vh] flex flex-col  justify-center  gap-9 items-center">
        <FaCircleXmark className="bg-[#FA2C37] text-white text-9xl" />
        <p className="text-white font-bold italic text-2xl text-center">
          Payment Failed
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center text-center justify-center flex-1 ">
        <p>There was a problem during payment</p>
        <span>You can return to the homepage and try again.</span>

        <Link
          href={"/cars"}
          className="shadows rounded-lg  p-2 hover:bg-black/4 min-w-[100px]"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
