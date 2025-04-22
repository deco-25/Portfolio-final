import React from "react";
import { DeCoLogo } from "../assets";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full p-5 flex justify-between absolute">
      <div>
        <img src={DeCoLogo} alt="" className="w-[80px]" />
      </div>
      <div className="flex items-center gap-8 text-lg font-lato">
        <div>CONTACT</div>
        <div>MENU</div>
        <div>
          <MdMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
