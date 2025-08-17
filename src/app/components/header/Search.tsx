import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="flex gap-2 items-center border p-1 px-4 max-sm:px-1 min-w-[150px] border-gray-300  rounded-2xl w-[50%]">
      <button className="text-xl max-sm:text-md">
        <CiSearch />
      </button>
      <input
        type="search"
        placeholder="Bir marka aratın"
        className=" outline-none text-md max-sm:text-sm  w-[100%]   placeholder:max-sm:text-sm"
      />
    </div>
  );
};

export default Search;
