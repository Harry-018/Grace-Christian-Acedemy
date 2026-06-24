import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex h-full flex-col gap-y-10 bg-linear-to-b from-swamp-green to-egg-dark p-5 font-[Poppins] text-bone md:flex-row md:justify-center md:gap-x-10 lg:gap-x-20">
      {/* quick links */}
      <div className="flex flex-col gap-y-5">
        <h1 className="text-lg tracking-widest">Quick Links</h1>
        <span className="flex w-50 flex-col gap-y-3 text-sm">
          <NavLink to="/">
            <span className="hover:font-[PoppinsBold]">Home</span>
          </NavLink>
          <NavLink to="transport">
            <span className="hover:font-[PoppinsBold]"> Transport</span>
          </NavLink>
          <NavLink to="tuition">
            <span className="hover:font-[PoppinsBold]">Tuitions</span>
          </NavLink>
          <NavLink to="admission">
            <span className="hover:font-[PoppinsBold]">Admission</span>
          </NavLink>
        </span>
      </div>

      {/* contact us */}
      <div className="flex flex-col gap-y-5">
        <h1 className="text-lg tracking-widest">Contact Us</h1>

        <div className="flex justify-between gap-x-5">
          <div className="flex w-50 flex-col gap-y-5 text-xs">
            <div className="flex flex-col">
              <span className="font-[PoppinsBold]">Contact Number</span>
              <span>0992-641-8526</span>
            </div>
            <div className="flex flex-col">
              <span className="font-[PoppinsBold]">Facebook</span>
              <span>
                <a
                  href="https://www.facebook.com/profile.php?id=100094183517001"
                  target="blank"
                >
                  Grace Christian Academy of Cavite Inc.
                </a>
              </span>
            </div>
          </div>
          <div className="flex w-50 flex-col gap-y-5 text-xs">
            <div className="flex flex-col">
              <span className="font-[PoppinsBold]">Email</span>
              <span>grace.cslife@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="font-[PoppinsBold]">Address</span>
              <span>
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
