/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const Technologies = (props) => {
  const [items, setItems] = useState([
    {
      icon: 'fab fa-html5 technologies--icon',
      delay: 600,
      name: 'HTML',
    },
    {
      icon: 'fab fa-css3-alt technologies--icon',
      delay: 500,
      name: 'CSS',
    },
    {
      icon: 'fab fa-sass technologies--icon',
      delay: 400,
      name: 'Sass',
    },
    {
      icon: 'fab fa-js-square technologies--icon',
      delay: 300,
      name: 'JavaScript',
    },
    {
      icon: 'fab fa-react technologies--icon',
      delay: 200,
      name: 'React',
    },
    {
      icon: 'fab fa-python technologies--icon',
      delay: 100,
      name: 'Python',
    },
    {
      icon: 'fab fa-github-square technologies--icon',
      delay: 0,
      name: 'GitHub',
    },
  ]);

  const transition = useTransition(items, {
    from: { opacity: 0, x: -500 },
    enter: (item) => async (next) => (
      next({ x: 0, opacity: 1, delay: item.delay })
    ),
  });

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#303846',
      color: props.color,
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    arrow: {
      color: '#303846',
    },
  }))(Tooltip);

  return (
    <div className="technology">
      <div className="technologies">
          {transition((style, item) => <animated.div className="technologies--icon mb2p" style={style}><LightTooltip title={item.name} placement="top" arrow><i style={{ color: props.color }} className={item.icon} ></i></LightTooltip></animated.div>)}
      </div>
      <div className="tech-about">
        <p className="text centerp mb1p">Front-end experience with HTML, JavaScript, CSS, Sass, React, and JQuery. Back-end experience with Python, Django, SQLite. <span className="noshow">Also experienced with using GitHub for version control, Firebase,
        Heroku, Postman, and Photoshop. Check out what I'm currently working on by viewing a recent pull request!</span></p>
      </div>
    </div>
  );
};
