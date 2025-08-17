"use client";

import { payFetch } from "@/app/services";
import { Car } from "@/app/types";
import React, { FC, useState } from "react";
import Loader from "./Loader";

interface Props {
  car: Car;
}

const PayBtn: FC<Props> = ({ car }) => {
  const [loading, setloading] = useState<Boolean>(false);

  const handlePay = () => {
    setloading(true);
    payFetch(car)
      .then((data) => (window.location.href = data.url))
      .catch()
      .finally(() => setloading(false));
  };

  return (
    <button
      className="btn bg-[#3563E9] min-w-[150px] min-h-[40px] text-white flex items-center justify-center"
      onClick={handlePay}
    >
      {loading ? <Loader /> : "Aracı Kirala"}
    </button>
  );
};

export default PayBtn;
