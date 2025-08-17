import { Car } from "../types";

export const a = (car: Car) => {
  const arr = [
    {
      title: "Araç Tipi",
      value: car.type,
    },
    {
      title: "Kapasite",
      value: car.capacity,
    },
    {
      title: "Şanzıman",
      value: car.transmission,
    },
    {
      title: "Yakıt",
      value: car.fuelType,
    },
    {
      title: "Renk",
      value: car.color,
    },
    {
      title: "Çekiş",
      value: car.drive,
    },
    {
      title: "Yıl",
      value: car.year,
    },
    {
      title: "Yakıt Kapasite",
      value: car.gasoline || "?",
    },
  ];

  return arr;
};
