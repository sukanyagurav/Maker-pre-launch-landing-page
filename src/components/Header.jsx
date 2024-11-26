import React from "react";
import logo from "/images/logo.svg";
const Header = () => {
  return (
    <header className="p-8 max-w-[1300px] mx-auto">
      <a href="#none">
        <img src={logo} alt="" />
      </a>
    </header>
  );
};

export default Header;
