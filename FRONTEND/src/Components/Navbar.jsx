import React from "react";
import { MenuIcon } from "lucide-react";
import GreenButton from "./GreenButton";

const Navbar = () => {
  return (
    <div className="font-[Poppins]">
      <div className="flex w-full items-center justify-around bg-bone p-3 text-xs inset-shadow-small">
        <MenuIcon />
        <span className="flex items-center gap-x-2">
          <img src="/assets/logowbg.png" alt="" className="hidden h-8" />
          <span>Grace Christian Academy</span>
        </span>

        <GreenButton Label={"Login"} />
      </div>

      {/* <div>
        <ul className="flex w-[60%] flex-col bg-red-300">
          <li>Home</li>
          <li>Transportation</li>
          <li>Tuitions</li>
          <li>Admission</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
