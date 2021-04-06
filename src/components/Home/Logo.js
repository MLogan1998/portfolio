/* eslint-disable arrow-body-style */
import React from 'react';
import { useSpring, animated, config } from 'react-spring';

export const Logo = () => {
  const props = useSpring({
    from: { opacity: 0, y: -500 },
    to: { opacity: 1, y: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={props}>
      <img src="https://i.imgur.com/wrupCN7.png" alt="logo" />
    </animated.div>
  );
};
