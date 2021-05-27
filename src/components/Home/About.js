/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  useSpring,
  animated,
  config,
} from 'react-spring';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const About = (props) => {
  const useStyles = makeStyles({
    root: {
      color: props.color,
      borderColor: props.color,
      fontFamily: 'Montserrat',
      fontSize: '1.25rem',
    },
  });

  const props2 = useSpring({
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
    config: { duration: 400 },
  });

  const classes = useStyles();

  return (
    <div style={props2} className="about_container">
      <animated.div style={props2}>
      <div className="mb25">
      <h1 className="cursive_heading" style={{ color: props.color }}>Hello<span className="white">!</span></h1>
      <p className="text">My name is <span className="green bold" style={{ color: props.color }}>Matt Logan</span>, I'm a web developer in <span className="green bold" style={{ color: props.color }}>Nashville, Tennessee</span> focussed in <span className="green bold" style={{ color: props.color }}>JavaScript</span> and <span className="green bold" style={{ color: props.color }}>Python</span>. Thanks for visiting!</p>
      </div>
      </animated.div>
      <div className="button_container">
        {/* <Button component={Link} to="/projects" className={`button_container--button ${classes.root}`} variant="outlined">Projects</Button>
        <Button component={Link} to="/tech" className={`button_container--button ${classes.root}`} variant="outlined">Tech Stack</Button> */}
        <Button component={Link} to="/contact" className={`button_container--button ${classes.root}`} variant="outlined">Contact</Button>
      </div>
    </div>
  );
};
