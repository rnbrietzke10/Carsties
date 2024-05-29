'use client';
import React from 'react';
import { IoCarSportOutline } from 'react-icons/io5';
import { useParamsStore } from '../hooks/useParamsStore';
import { stat } from 'fs';

const Logo = () => {
  const reset = useParamsStore((state) => state.reset);
  return (
    <div>
      <div
        onClick={reset}
        className="flex items-center gap-2 text-3xl font-semibold text-red-500 cursor-pointer"
      >
        <IoCarSportOutline size={34} />
        <div> Carsties Auctions</div>
      </div>
    </div>
  );
};

export default Logo;
