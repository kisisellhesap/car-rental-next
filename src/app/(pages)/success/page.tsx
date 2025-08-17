import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Success = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-104px)]">
      <div className="bg-[#00C950] h-[50vh] flex flex-col  justify-center  gap-9 items-center">
        <FaCircleCheck className="bg-[#00C950] text-white text-9xl" />
        <p className="text-white font-bold italic text-2xl text-center">
          Payment was successful
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center text-center justify-center flex-1 ">
        <p>
          You will receive an email soon regarding how to pick up your vehicle.
        </p>
        <span>Please check your email</span>
        <Link
          href={"/orders"}
          className="shadows rounded-lg   min-w-[100px] p-2 hover:bg-black/4"
        >
          My Orders
        </Link>
        <Link
          href={"/cars"}
          className="shadows rounded-lg  min-w-[100px]  p-2 hover:bg-black/4"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
