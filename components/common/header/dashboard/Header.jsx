'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Menu Toggle btn--> */}
        <Link href="/cmswegrow/my-dashboard" className="navbar_brand float-start dn-smd">
          <Image
            width={170}
            height={75}
            className="logo1 img-fluid"
            // src="/assets/images/logo.svg"
            src={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/logo.svg`}
            alt="header-logo2.png"
          />
          <Image
            width={40}
            height={45}
            className="logo2 img-fluid"
            src="/assets/images/header-logo2.png"
            alt="header-logo2.png"
          />
          {/* <span>WeGrow</span> */}
        </Link>
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
