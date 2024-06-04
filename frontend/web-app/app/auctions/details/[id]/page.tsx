import React from 'react';

const Details = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>Details for {params.id}</div>
    </div>
  );
};

export default Details;
