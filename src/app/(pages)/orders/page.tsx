import { getOrders } from "@/app/services";
import generateImage from "@/app/services/generateImage";
import Image from "next/image";
import React from "react";

const Orders = async () => {
  const { orders } = await getOrders();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-6">My Orders</h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border border-gray-200 bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Ürün Görseli</th>
              <th className="px-4 py-2 border">Marka / Model</th>
              <th className="px-4 py-2 border">Fiyat</th>
              <th className="px-4 py-2 border">Sipariş Tarihi</th>
              <th className="px-4 py-2 border">Ödeme Tipi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (item, i) =>
                item.product && (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2 border">
                      <div className="relative w-[120px] h-[80px]">
                        <Image
                          src={generateImage(item.product)}
                          alt={item.product.make}
                          fill
                          className="rounded-md object-cover"
                          unoptimized
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 border font-medium">
                      {item.product.make} <span>{item.product.model}</span>
                    </td>
                    <td className="px-4 py-2 border">
                      {item.product.price} TL
                    </td>
                    <td className="px-4 py-2 border">
                      {new Date(item.createdAt).toLocaleDateString("tr-TR")}
                    </td>
                    <td className="px-4 py-2 border">{item.type}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
