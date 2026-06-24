import React, { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import GreenButton from "./GreenButton";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-[Poppins]">
      <div className="relative z-50 flex w-full items-center justify-around bg-bone p-3 text-xs inset-shadow-small lg:hidden">
        <MenuIcon
          onClick={() => {
            setSideBar(!sidebar);
          }}
        />
        <span className="flex items-center gap-x-2">
          <img src="/assets/logowbg.png" alt="" className="h-8 rounded-full" />
          <Link to="/">
            <span>Grace Christian Academy</span>
          </Link>
        </span>

        <GreenButton onClick={() => navigate("/tuition")} Label={"Login"} />
      </div>
      <div className="relative z-50 hidden h-20 w-full items-center justify-around bg-bone p-3 text-xs inset-shadow-med lg:flex">
        <span className="flex items-center gap-x-2">
          <img src="/assets/logowbg.png" alt="" className="h-8 rounded-full" />
          <Link to="/">
            <span className="text-lg">Grace Christian Academy</span>
          </Link>
        </span>

        <GreenButton onClick={() => navigate("/tuition")} Label={"Login"} />
      </div>
      {sidebar && (
        <div className="fixed top-0 z-50 h-full w-full bg-neutral-500/50">
          <span className="flex h-full w-[60%] flex-col gap-y-5 bg-bone p-5 md:w-[30%]">
            <X
              onClick={() => {
                setSideBar(!sidebar);
              }}
            />
            <div className="flex flex-col">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? " bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <span>Home</span>
              </NavLink>
              <NavLink
                to="transport"
                className={({ isActive }) =>
                  `${isActive ? " bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <span>Transportation</span>
              </NavLink>
              <NavLink
                to="tuition"
                className={({ isActive }) =>
                  `${isActive ? "bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <span>Tuitions</span>
              </NavLink>
              <NavLink
                to="admission"
                className={({ isActive }) =>
                  `${isActive ? "bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <span>Admission</span>
              </NavLink>
            </div>
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
