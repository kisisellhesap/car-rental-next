import Cart from "@/app/components/cars/Cart";
import Hero from "@/app/components/cars/Hero";
import { getCars } from "@/app/services";
import React, { FC } from "react";

const Cars: FC = async () => {
  const { cars } = await getCars();

  console.log(cars);
  return (
    <div className="containers">
      <div className="flex gap-3">
        <Hero
          title="Araç Kiralama için
En İyi Platform"
          description="Güvenli ve güvenilir bir şekilde araç kiralam yapmanın kolaylığı. Tabii ki düşük bir fiyata"
          img="/car-1.png"
          bg="/bg-1.png"
          btnBg="#3563E9"
        />
        <Hero
          title="Düşük fiyata
Araba Kirala"
          description="Ucuz araç kiralama hizmetleri ile güvenli ve konforlu olanaklar sunmak"
          img="/car-2.png"
          bg="/bg-2.png"
          btnBg="#54A6FF"
          hidden={true}
        />
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Popüler Araçlar</h1>
        <div
          className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 
        gap-7"
        >
          {cars.map((item, i) => (
            <Cart item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
