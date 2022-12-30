import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo_black.png";

const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={logo} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title" >This is a header in the nav bar</p>
      </div>
    </header>
  );
};

export default Header;
