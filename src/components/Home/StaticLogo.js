/* eslint-disable arrow-body-style */
import React from 'react';

export const StaticLogo = (props) => {
  return (
      <div className="logo_container">
        <div className="logo_image noshow notab" style={{ border: `13px solid ${props.color}` }} ></div>
        <div className="link_container">
          <a href='https://www.linkedin.com/in/mlogan5212/' target="_blank" rel="noopener noreferrer"><i className='noshow notab fab fa-linkedin link_container--icon' style={{ color: props.color }}></i></a>
          <a href='https://github.com/MLogan1998' target="_blank" rel="noopener noreferrer"><i className='noshow notab fab fa-github-square link_container--icon' style={{ color: props.color }}></i></a>
          <a href='https://drive.google.com/file/d/1lb8KNlu7K3n_1ju8j3kBojv9nsqXzKx_/view?usp=sharing' target="_blank" rel="noopener noreferrer"><i className='noshow notab fas fa-file-pdf link_container--icon' style={{ color: props.color }}></i></a>
        </div>
      </div>
  );
};
