import Image from "next/image";
import React, { FC } from "react";

interface PropsType {
  title: string;
  description: string;
  img: string;
  bg: string;
  btnBg: string;
  hidden?: boolean;
}

const Hero: FC<PropsType> = ({
  title,
  description,
  img,
  bg,
  btnBg,
  hidden,
}) => {
  return (
    <div
      className={`hero ${hidden && "max-md:hidden"}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-3xl font-bold text-white max-w-[265px] ">{title}</h1>
      <p className="line-clamp-2"> {description}</p>
      <button className="btn" style={{ backgroundColor: `${btnBg}` }}>
        Araç Kirala
      </button>
      <Image src={img} alt="img" width={300} height={300} className="mx-auto" />
    </div>
  );
};

export default Hero;
