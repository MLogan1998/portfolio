/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export const Logo = (props) => {
  const [items, setItems] = useState([
    {
      icon: 'fab fa-linkedin link_container--icon',
      x: 0,
      delay: 1000,
      link: 'https://www.linkedin.com/in/mlogan5212/',
    },
    {
      icon: 'fab fa-github-square link_container--icon',
      x: 10,
      delay: 800,
      link: 'https://github.com/MLogan1998',
    },
    {
      icon: 'fas fa-file-pdf link_container--icon',
      x: 20,
      delay: 600,
      link: 'https://drive.google.com/file/d/1RanDUQV2FY83wIFpVoUUh6AFwmQYnHMT/view?usp=sharing',
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
        <div className="logo_image" style={{ border: `13px solid ${props.color}` }} ></div>
        <div className="link_container">
          {transition((style, item) => <animated.div style={style}> <a href={item.link} target="_blank" rel="noopener noreferrer"><i className={item.icon} style={{ color: props.color }}></i></a></animated.div>)}
        </div>
      </div>
  );
};
