import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-10 bg-linear-to-b from-swamp-green to-egg-dark p-5 font-[Poppins] text-bone">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-lg tracking-widest">Quick Links</h1>
        <ul className="flex flex-col gap-y-3 text-sm">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="transport">
            <li>Transport</li>
          </NavLink>
          <NavLink to="tuition">
            <li>Tuitions</li>
          </NavLink>
          <NavLink to="admission">
            <li>Admission</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex flex-col gap-y-5">
        <h1 className="text-lg tracking-widest">Contact Us</h1>

        <div className="flex gap-x-10">
          <div className="flex w-[50%] flex-col gap-y-5 text-sm">
            <div className="flex flex-col gap-y-2">
              <span className="font-[PoppinsBold]">Contact Number</span>
              <span className="text-xs">0992-641-8526</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="font-[PoppinsBold]">Facebook</span>
              <span className="text-xs">
                <a
                  href="https://www.facebook.com/profile.php?id=100094183517001"
                  target="blank"
                >
                  Grace Christian Academy of Cavite Inc.
                </a>
              </span>
            </div>
          </div>
          <div className="flex w-[50%] flex-col gap-y-5 text-sm">
            <div className="flex flex-col gap-y-2">
              <span className="font-[PoppinsBold]">Email</span>
              <span className="text-xs">grace.cslife@gmail.com</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="font-[PoppinsBold]">Address</span>
              <span className="text-xs">
                306, Purok 4, Barangay Cabuco, Trece Martires, Philippines, 4109
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
