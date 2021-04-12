/* eslint-disable arrow-body-style */
import React from 'react';
import { About } from './About';
import { Logo } from './Logo';

export const Home = (props) => {
  return (
    <div className="container">
      <About color={props.color}/>
      <Logo color={props.color}/>
    </div>
  );
};
