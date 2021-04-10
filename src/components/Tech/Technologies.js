/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export const Technologies = () => {
  const [items, setItems] = useState([
    {
      icon: 'fab fa-html5 technologies--icon green',
      delay: 0,
    },
    {
      icon: 'fab fa-css3-alt technologies--icon white',
      delay: 100,
    },
    {
      icon: 'fab fa-sass technologies--icon green',
      delay: 200,
    },
    {
      icon: 'fab fa-js-square technologies--icon white',
      delay: 300,
    },
    {
      icon: 'fab fa-react technologies--icon green',
      delay: 400,
    },
    {
      icon: 'fab fa-python technologies--icon white',
      delay: 500,
    },
  ]);

  const transition = useTransition(items, {
    from: { opacity: 0, x: -500 },
    enter: (item) => async (next) => (
      next({ x: 0, opacity: 1, delay: item.delay })
    ),
  });

  return (
      <div className="technologies">
          {transition((style, item) => <animated.div className="technologies--icon" style={style}><i className={item.icon}></i></animated.div>)}
      </div>
  );
};
