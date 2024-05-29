import EmptyFilter from '@/app/components/EmptyFilter';
import React from 'react';

const Page = ({ searchParams }: { searchParams: { callbackUrl: string } }) => {
  return (
    <div>
      <EmptyFilter
        title="You need to be logged in to do that"
        subtitle="Please click below to sign in"
        showLogin
        callbackUrl={searchParams.callbackUrl}
      />
    </div>
  );
};

export default Page;
