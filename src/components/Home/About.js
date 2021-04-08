import React, { useState } from 'react';
import {
  useSpring,
  animated,
  config,
} from 'react-spring';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    color: '#1de9b6',
    borderColor: '#1de9b6',
    fontFamily: 'Montserrat',
    fontSize: '1.25rem',
  },
});

export const About = () => {
  const props = useSpring({
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
    config: { duration: 800 },
  });

  const classes = useStyles();

  return (
    <animated.div style={props} className="about_container">
      <p className="text">My name is <span className="green">Matt Logan</span>, I'm a web developer in <span className="green">Nashville, Tennessee</span>. Experienced in <span className="green">JavaScript, React, Python, and Django.</span> Thanks for visiting! Have a look around.</p>
      <div className="button_container">
        <Button component={Link} to="/projects" className={`button_container--button ${classes.root}`} variant="outlined">Projects</Button>
        <Button component={Link} to="/tech" className={`button_container--button ${classes.root}`} variant="outlined">Tech Stack</Button>
        <Button component={Link} to="/contact" className={`button_container--button ${classes.root}`} variant="outlined">Contact</Button>
      </div>
    </animated.div>
  );
};
