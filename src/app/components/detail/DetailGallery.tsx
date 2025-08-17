import generateImage from "@/app/services/generateImage";
import { Car } from "@/app/types";
import Image from "next/image";
import React, { FC } from "react";

interface DetailProps {
  car: Car;
}

const DetailGallery: FC<DetailProps> = ({ car }) => {
  return (
    <div className="rounded-lg flex flex-col gap-3">
      <div className=" rounded-lg bg-[url('/bg-2.png')] text-white flex flex-col gap-3 p-4 bg-no-repeat bg-cover ">
        <h1 className="text-3xl font-bold">
          En iyi tasarıma ve hızlanmaya sahip spor otomobil
        </h1>
        <p>Sürüş sırasında güvenlik ve konfor fütüristik ve zarif spor araba</p>
        <div className="relative h-[200px]">
          <Image
            src={generateImage(car)}
            alt={car.make}
            className="object-contain"
            unoptimized
            fill
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 h-[100px]">
        <div className="relative ">
          <Image
            src={generateImage(car, undefined, 1)}
            alt={car.make}
            unoptimized
            fill
            className="rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            src={generateImage(car, undefined, 5)}
            alt={car.make}
            unoptimized
            className="rounded-lg"
            fill
          />
        </div>
        <div className="relative">
          <Image
            src={generateImage(car, undefined, 4)}
            alt={car.make}
            unoptimized
            className="rounded-lg"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default DetailGallery;
