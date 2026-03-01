import React from "react";
import logoloading from "../assets/img/DESTAQUE.png";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#350000]">
      <div className="relative h-[240px] w-[240px]">
        {/* círculo girando (equivalente ao ::before) */}
        <div className="absolute inset-0 animate-spin rounded-full border-[5px] border-black/10 border-t-[#CCAC73]" />

        {/* logo centralizada */}
        <img
          src={logoloading}
          alt="Loading..."
          className="absolute left-1/2 top-1/2 h-[170px] w-[200px] -translate-x-1/2 -translate-y-1/2 object-contain"
          loading="eager"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Preloader;
