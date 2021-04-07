import React, { useState } from 'react';
import {
  useSpring,
  animated,
  config,
  useTransition,
} from 'react-spring';

export const About = () => {
  const [items, setItems] = useState([
    {
      icon: 'fab fa-linkedin link_container--icon',
      x: 0,
      delay: 1200,
    },
    {
      icon: 'fab fa-github-square link_container--icon',
      x: 10,
      delay: 1000,
    },
    {
      icon: 'fas fa-file-pdf link_container--icon',
      x: 20,
      delay: 800,
    },
  ]);

  const props = useSpring({
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
    config: { duration: 800 },
  });

  const transition = useTransition(items, {
    from: { opacity: 0, x: -500 },
    enter: (item) => async (next) => (
      next({ x: item.x, opacity: 1, delay: item.delay })
    ),
  });

  return (
    <animated.div style={props} className="about_container">
      <p className="text">My name is <span className="green">Matt Logan</span>, I'm a web developer in <span className="green">Nashville, Tennessee</span>. Experienced in <span className="green">JavaScript, React, Python, and Django.</span> Thanks for visiting! Have a look around.</p>
      <div className="link_container">
        {transition((style, item) => <animated.div style={style}><i className={item.icon}></i></animated.div>)}
      </div>
    </animated.div>
  );
};
