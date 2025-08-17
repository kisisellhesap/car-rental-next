import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaGasPump } from "react-icons/fa";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { Car } from "../../types";
import generateImage from "../../services/generateImage";

interface CartProps {
  item: Car;
}

const Cart: FC<CartProps> = ({ item }) => {
  return (
    <div className="shadows rounded-lg p-8 max-sm:p-4  flex flex-col gap-6 hover:bg-white/60">
      <h2 className="text-xl font-bold">
        {item.make} {item.model}
      </h2>
      <span className="text-md text-basic-gray">{item.type}</span>
      <div className="flex flex-col  h-[200px] gap-9 max-sm:gap-3 mb-5 max-sm:flex-row">
        <div className="relative flex-1 flex flex-col gap-3 ">
          <Image src={generateImage(item)} alt={item.make} unoptimized fill />
        </div>

        <div className="flex justify-between items-center gap-4 text-basic-gray text-lg max-sm:flex-col max-sm:justify-center">
          <div className=" flex gap-2 items-center">
            <FaGasPump />
            <span>{item.fuelType}</span>
          </div>
          <div className="flex gap-2 items-center">
            <TbSteeringWheelFilled />
            <span>{item.transmission}</span>
          </div>
          <div className=" flex gap-2 items-center">
            <FaUserFriends />
            <span>{item.capacity}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-3 items-center mt-auto">
        <p>
          <span className="text-2xl font-bold italic"> {item.price} ₺ / </span>
          gün
        </p>

        <Link
          href={`/cars/${item._id}`}
          className="btn bg-[#3563E9] text-white"
        >
          Aracı Kirala
        </Link>
      </div>
    </div>
  );
};

export default Cart;
