import { Car, Order } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

type GetCarsReturn = {
  cars: Car[];
};

export const getCars = async (): Promise<GetCarsReturn> => {
  const res = await fetch(`${API_URL}/api/cars`);

  const data = await res.json();
  console.log(data);

  return data;
};

type GetCarReturn = {
  car: Car;
};

export const getCar = async (id: string): Promise<GetCarReturn> => {
  const res = await fetch(`${API_URL}/api/cars/${id}`);

  const data = await res.json();
  return data;
};

type GetPayReturn = {
  url: string;
};

export const payFetch = async (car: Car): Promise<GetPayReturn> => {
  const res = await fetch(`${API_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(car),
  });

  return res.json();
};
type GetOrdersReturn = {
  orders: Order[];
};

export const getOrders = async (): Promise<GetOrdersReturn> => {
  const res = await fetch(`${API_URL}/api/orders`);

  return res.json();
};
