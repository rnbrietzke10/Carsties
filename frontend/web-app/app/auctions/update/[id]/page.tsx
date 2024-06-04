import React from 'react';

const Update = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>Update for {params.id}</div>
    </div>
  );
};

export default Update;
