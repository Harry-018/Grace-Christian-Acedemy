import React from "react";

const GreenButton = ({ Label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-swamp-green px-3 py-2 text-bone"
    >
      {Label}
    </button>
  );
};

export default GreenButton;
