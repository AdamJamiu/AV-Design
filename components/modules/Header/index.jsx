import React from "react";
import Image from "next/image";
import Logo from "../../../public/AFRIK TV logo.png";
import Button from "../../elements/Button";
import Link from 'next/link'
const Header = () => {
  return (
    <header className="flex items-center justify-between p-10 max-w-[120rem] ">
      <div className="logo">
        <Image src={Logo} alt="AFRIK TV logo" unoptimized />
      </div>
      <nav className="lg:block hidden">
        <ol className="flex font-semibold text-primary space-x-16">
          <li className="text-lg cursor-pointer">About</li>

          <li className="text-lg cursor-pointer">Features</li>

          <Link href="#faq" passHref>
            <li className="text-lg cursor-pointer">FAQ</li>
          </Link>
        </ol>
      </nav>{" "}
      {<Button>
        <Link href={"/signin"} passHref>
          Sign in
        </Link>
      </Button>}
    </header>
  );
};

export default Header;
