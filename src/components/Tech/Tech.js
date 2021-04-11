/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Technologies } from './Technologies';
import { GitHub } from './GitHub';
import githubKey from './githubKey.json';

export const Tech = (props) => {
  const [gitHubData, setGitHubData] = useState([]);

  const getGitHubData = () => (
    fetch(`${gitHubUrl}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `token ${gitHubToken}`,
      },
    })
      .then((response) => response.json())
      .then(setGitHubData)
  );

  useEffect(() => {
    getGitHubData();
  }, []);

  const gitHubToken = githubKey.github.apiKey;
  const gitHubUrl = githubKey.github.url;

  const useStyles = makeStyles({
    root: {
      color: props.color,
      borderColor: props.color,
      fontFamily: 'Montserrat',
      fontSize: '1.25rem',
    },
  });

  const classes = useStyles();

  return (
      <>
      {gitHubData && gitHubData.length > 0
        ? <div className="main_container">
        <div className="tech_heading">
          <h1 className="cursive_heading" style={{ color: props.color }}>Tech Stack</h1>
          <div className="button_container">
            <Button component={Link} to="/" className={`button_container--button ${classes.root}`} variant="outlined">Home</Button>
            <Button component={Link} to="/projects" className={`button_container--button ${classes.root}`} variant="outlined">Projects</Button>
            <Button component={Link} to="/contact" className={`button_container--button ${classes.root}`} variant="outlined">Contact</Button>
          </div>
        </div>
        <div className="tech_container">
          <Technologies color={props.color}/>
          <GitHub gitHubData={gitHubData} color={props.color} />
        </div>
        </div>
        : '' }
      </>
  );
};
