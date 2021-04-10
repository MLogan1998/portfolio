/* eslint-disable arrow-body-style */
import React from 'react';

import { Technologies } from './Technologies';
import { GitHub } from './GitHub';

export const Tech = () => {
  return (
      <div className="tech_container">
        <Technologies />
        <GitHub />
      </div>
  );
};
