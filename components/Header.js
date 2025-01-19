"use client";

import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://i.pinimg.com/236x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg"
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />

          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeOutlinedIcon} />
          <HeaderIcon Icon={FlagOutlinedIcon} />
          <HeaderIcon Icon={PlayCircleFilledWhiteOutlinedIcon} />
          <HeaderIcon Icon={ShoppingCartOutlinedIcon} />
          <HeaderIcon Icon={PeopleOutlineIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3 text-gray-500">
          Eman Tariq
        </p>
        <GridViewRoundedIcon className="icon" />
        <TextsmsRoundedIcon className="icon" />
        <NotificationsOutlinedIcon className="icon" />
        <ExpandMoreIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
