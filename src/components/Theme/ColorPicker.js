/* eslint-disable arrow-body-style */
import React from 'react';

export const ColorPicker = (props) => {
  return (
    <i className="fas fa-paint-brush picker" style={{ color: props.color, border: `3px solid ${props.color}` }} onClick={props.randomizeColor}></i>
  );
};
