'use client';
import React from 'react';
import { IoCarSportOutline } from 'react-icons/io5';
import { useParamsStore } from '../hooks/useParamsStore';
import { usePathname, useRouter } from 'next/navigation';
import path from 'path';

const Logo = () => {
  const router = useRouter();
  const pathname = usePathname();
  const reset = useParamsStore((state) => state.reset);

  function doReset() {
    if (pathname !== '/') router.push('/');
    reset();
  }

  return (
    <div>
      <div
        onClick={doReset}
        className="flex items-center gap-2 text-3xl font-semibold text-red-500 cursor-pointer"
      >
        <IoCarSportOutline size={34} />
        <div> Carsties Auctions</div>
      </div>
    </div>
  );
};

export default Logo;
