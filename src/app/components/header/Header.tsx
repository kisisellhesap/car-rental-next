import React, { FC } from "react";
import { IoIosHeart } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import Link from "next/link";
import Search from "./Search";

const Header: FC = () => {
  return (
    <header className="bg-white ">
      <div className="containers flex items-center justify-between gap-5">
        <h1 className="text-basic-blue text-4xl font-bold max-sm:text-3xl">
          DRIVE
        </h1>

        <Search />

        <div className="flex gap-3">
          <Link href={"/cars"} className="icon ">
            <FaCarAlt />
          </Link>
          <Link href={""} className="icon max-sm:hidden">
            <IoIosHeart />
          </Link>
          <Link href={""} className="icon max-sm:hidden">
            <IoMdNotifications />
          </Link>
          <Link href={""} className="icon">
            <AiFillDollarCircle />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
