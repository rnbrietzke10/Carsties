import React from 'react';
import AuctionCard from './AuctionCard';

async function getData() {
  const res = await fetch('http://localhost:7001/api/auctions');
  if (!res.ok) throw new Error('Failed to fecth data');

  return res.json();
}

export default async function Listings() {
  const data = await getData();

  return (
    <div className='grid grid-cols-4 gap-6'>
      {data &&
        data.map((auction: any) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
    </div>
  );
}
