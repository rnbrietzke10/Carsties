import React from 'react';
import { IoCarSportOutline } from 'react-icons/io5';

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md'>
      <div>
        <div className='flex items-center gap-2 text-3xl font-semibold text-red-500'>
          <IoCarSportOutline size={34} />
          Carsties Auctions
        </div>
      </div>
      <div>Search</div>
      <div>Login</div>
    </header>
  );
}