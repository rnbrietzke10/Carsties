import React from 'react';
import AuctionCard from './AuctionCard';
import { Auction, PageResult } from '@/types';

async function getData(): Promise<PageResult<Auction>> {
  const res = await fetch('http://localhost:7001/api/auctions');
  if (!res.ok) throw new Error('Failed to fecth data');

  return res.json();
}

export default async function Listings() {
  const data = await getData();

  return (
    <div className="grid grid-cols-4 gap-6">
      {data &&
        data.results.map((auction: Auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
    </div>
  );
}
