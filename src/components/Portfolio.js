/* eslint-disable no-bitwise */
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home } from './Home/Home';
import { Projects } from './Projects/Projects';
import { Tech } from './Tech/Tech';
import { Contact } from './Contact/Contact';
import { ColorPicker } from './Theme/ColorPicker';

export const Portfolio = () => {
  const [color, setColor] = useState('#1de9b6');

  const randomizeColor = () => {
    const randomColor = '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
    setColor(randomColor);
  };

  return (
    <BrowserRouter>
      <ColorPicker randomizeColor={randomizeColor} color={color} />
      <Switch>
        <Route exact path="/">
          <Home color={color}/>
        </Route>
        <Route path="/projects">
          <Projects color={color} />
        </Route>
        <Route path="/tech">
          <Tech color={color}/>
        </Route>
        <Route path="/contact">
          <Contact color={color} />
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};
