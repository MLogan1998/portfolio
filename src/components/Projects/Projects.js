import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Project } from './Project';

const useStyles = makeStyles({
  root: {
    color: '#1de9b6',
    borderColor: '#1de9b6',
    fontFamily: 'Montserrat',
    fontSize: '1.25rem',
  },
});

export const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'seekr',
      description: 'is a Tinder-like app made for Junior Developers and employers to match with one another.  Once matched, employers and seekers can chat with one another in real-time.',
      img: 'https://i.imgur.com/WdaN1aM.png',
      isDeployed: false,
      link: '',
      repo: 'https://github.com/MLogan1998/seekr-client',
      delay: 350,
    },
    {
      id: 2,
      title: 'Not The Office Again',
      description: 'was built for people with an addiction to The Office. Use the random movie generator to find movies featuring your favorite characters from The Office.',
      img: 'https://i.imgur.com/6u5bE8K.png',
      isDeployed: true,
      link: 'https://ntoa.logandevelopment.io',
      repo: 'https://github.com/MLogan1998/not-the-office-fec',
      delay: 0,
    },
  ]);

  const classes = useStyles();

  const setLoad = () => setLoaded(true);

  const createProject = projects && projects.map((project) => <Project key={project.id} project={project} setLoad={setLoad} loaded={loaded} />);

  return (
    <div className="project_main_container" style={ loaded ? {} : { display: 'none' }}>
      <div className="tech_heading">
        <h1 className="cursive_heading">Featured Projects</h1>
          <div className="button_container">
            <Button component={Link} to="/" className={`button_container--button ${classes.root}`} variant="outlined">Home</Button>
            <Button component={Link} to="/tech" className={`button_container--button ${classes.root}`} variant="outlined">Tech Stack</Button>
            <Button component={Link} to="/contact" className={`button_container--button ${classes.root}`} variant="outlined">Contact</Button>
          </div>
      </div>
      <div className="project_container">
        {createProject}
      </div>
    </div>
  );
};
