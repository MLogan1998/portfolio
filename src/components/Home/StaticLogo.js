/* eslint-disable arrow-body-style */
import React from 'react';

export const StaticLogo = () => {
  return (
      <div className="logo_container">
        <img className="logo noshow" src="https://i.imgur.com/wrupCN7.png" alt="logo" />
        <div className="link_container">
          <i className='noshow fab fa-linkedin link_container--icon'></i>
          <i className='noshow fab fa-github-square link_container--icon'></i>
          <i className='noshow fas fa-file-pdf link_container--icon'></i>
        </div>
      </div>
  );
};
