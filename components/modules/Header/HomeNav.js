// Navbar for homepage layout
import React from "react";
import Image from "next/image";
import Logo from "../../../public/AFRIK TV logo.png";
import Link from 'next/link'
import search from "../../../public/assets/images/search.svg"
import { useSelector } from "react-redux";

const HomeNavbar = () => {
  const { user } = useSelector((state) => state.loggedReducer);
  return (
    <header className="flex flex-row font-['Poppins'] items-center justify-between px-10 pt-3 max-w-[120rem]">
      <div className="logo cursor-pointer">
        <Link passHref href="/" >
          <Image src={Logo} alt="AFRIK TV logo" unoptimized />
        </Link>
      </div>
      <nav className="lg:block hidden">
        <ol className="flex font-semibold text-primary space-x-16">
          <li className="text-md font-bold cursor-pointer">Home</li>

          <li className="text-md font-bold cursor-pointer">Movies</li>

          <li className="text-md font-bold cursor-pointer">Amapiano</li>
        </ol>
      </nav>
      <div className="w-max relative">
        <input type="text" placeholder="Search" className="w-[350px] relative bg-[#EBEBEB] placeholder-[#847F7F] rounded-md px-5 py-2" />
        <div className="searchIcon absolute top-2 right-4">
          <Image src={search} width={15} height={15} alt="search" />
        </div>
      </div>

      <div>
        <Image
          className="rounded-3xl cursor-pointer"
          src={user.avatar}
          alt={"profile-pic"}
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};

export default HomeNavbar;
