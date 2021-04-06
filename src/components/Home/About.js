/* eslint-disable arrow-body-style */
import React from 'react';
import { useSpring, animated, config } from 'react-spring';

export const About = () => {
  const props = useSpring({
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={props} className="about_container">
      <p className="text">My name is <span className="green">Matt Logan</span>, I'm a web developer in <span className="green">Nashville, Tennessee</span>. Thanks for visiting! Have a look around.</p>
    </animated.div>
  );
};
