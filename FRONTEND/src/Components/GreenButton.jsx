import React from "react";

const GreenButton = ({ Label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-swamp-green px-4 py-2 font-[PoppinsBold] text-bone"
    >
      {Label}
    </button>
  );
};

export default GreenButton;
