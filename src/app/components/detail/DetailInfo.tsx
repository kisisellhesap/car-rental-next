import React, { FC } from "react";
import { Car } from "@/app/types";
import Link from "next/link";
import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { a } from "@/app/constant/infoArr";
import PayBtn from "./PayBtn";

interface DetailProps {
  car: Car;
}

const DetailInfo: FC<DetailProps> = async ({ car }) => {
  const arr = a(car);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex gap-3 items-center justify-between">
        <h1 className="text-3xl">{car.make}</h1>
        <IoIosHeart className="text-2xl text-red-400" />
      </header>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={` ${i > 3 ? "text-basic-gray/50" : "text-yellow-400"}`}
            />
          ))}
        </div>

        <span className="text-basic-gray/50 text-sm">440+ yorum</span>
      </div>

      <p className="text-lg">
        Üst düzey sürüş keyfi için tasarlanmış agresif ve güçlü bir süper araba.
      </p>

      <div className="grid grid-cols-2 gap-5">
        {arr.map((item, i) => (
          <div className="flex justify-between" key={i}>
            <span className="text-basic-gray/70">{item.title}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-3 items-center mt-auto">
        <p>
          <span className="text-2xl font-bold italic">{car.price} ₺ / </span>
          gün
        </p>

        <PayBtn car={car} />
      </div>
    </div>
  );
};

export default DetailInfo;
