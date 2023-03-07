import React, { useState, useEffect } from "react";

import LogoWhite from "../assets/img/logo-white.png";
import LogoDark from "../assets/img/logo-dark.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto">
        <a href="/">
          {header ? <img src={LogoDark} className='w[160px]' /> : <img src={LogoWhite} className='w[160px]' />}
        </a>
      </div>
    </header>
  );
};

export default Header;
