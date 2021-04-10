/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export const Logo = () => {
  const [items, setItems] = useState([
    {
      icon: 'fab fa-linkedin link_container--icon',
      x: 0,
      delay: 1000,
    },
    {
      icon: 'fab fa-github-square link_container--icon',
      x: 10,
      delay: 800,
    },
    {
      icon: 'fas fa-file-pdf link_container--icon',
      x: 20,
      delay: 600,
    },
  ]);

  const transition = useTransition(items, {
    from: { opacity: 0, x: -500 },
    enter: (item) => async (next) => (
      next({ x: 0, opacity: 1, delay: item.delay })
    ),
  });

  return (
      <div className="logo_container">
        <img className="logo" src="https://i.imgur.com/wrupCN7.png" alt="logo" />
        <div className="link_container">
          {transition((style, item) => <animated.div style={style}><i className={item.icon}></i></animated.div>)}
        </div>
      </div>
  );
};
