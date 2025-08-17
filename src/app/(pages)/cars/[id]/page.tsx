import React, { FC } from "react";
import { getCar } from "@/app/services";
import DetailInfo from "@/app/components/detail/DetailInfo";
import DetailGallery from "@/app/components/detail/DetailGallery";

interface DetailProps {
  params: Promise<{ id: string }>;
}

const Detail: FC<DetailProps> = async ({ params }) => {
  const { id } = await params;

  const { car } = await getCar(id);
  console.log(car);
  return (
    <div className="containers gap-5 grid grid-cols-2 max-md:grid-cols-1">
      <DetailGallery car={car} />
      <DetailInfo car={car} />
    </div>
  );
};

export default Detail;
