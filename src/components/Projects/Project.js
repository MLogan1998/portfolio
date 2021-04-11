/* eslint-disable arrow-body-style */
import React from 'react';
import {
  useSpring,
  animated,
  config,
} from 'react-spring';

export const Project = (props) => {
  const props2 = useSpring({
    from: { opacity: 0, x: -500 },
    to: { opacity: 1, x: 0 },
    delay: props.project.delay,
    config: { duration: 350 },
  });

  return (
    <animated.div className="project" style={props2}>
      <div className="project_content">
        <div className="project_content--image">
          <img src={props.project.img} alt="seekr screenshot" onLoad={props.setLoad} style={props.loaded ? {} : { display: 'none' }}></img>
        </div>
        <div className="project_content--info">
          <div>
          <p className="text"><span className="green bold">{props.project.title} </span>{props.project.description}</p>
          </div>
          <div className="project_content--links">
            <a href={props.project.repo} target="_blank" rel='noreferrer'><i className="fab fa-github-square green project_content--icon"></i></a>
            { props.project.isDeployed ? <a href={props.project.link} target="_blank" rel='noreferrer'><i className="fas fa-external-link-alt green project_content--icon"></i></a> : ''}
          </div>
        </div>
      </div>
    </animated.div>
  );
};
