import React from 'react';
import requireAuth from '../../HOC/requireAuth';

const Feature = () => {
  return (
    <div>
      <div>This is feature section</div>
    </div>
  );
};

export default requireAuth(Feature);
