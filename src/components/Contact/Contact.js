import React from 'react';
import {
  useSpring,
  animated,
  config,
} from 'react-spring';

import { ContactForm } from './ContactForm';
import { StaticLogo } from '../Home/StaticLogo';

export const Contact = () => {
  const props = useSpring({
    from: { opacity: 0, x: -500, y: 0 },
    to: { opacity: 1, x: 0, y: 0 },
    config: { duration: 500 },
  });

  return (
      <div className="container">
        <animated.div style={props} className="form_container">
          <ContactForm />
        </animated.div>
        <div className="contact-logo">
          <StaticLogo />
        </div>
      </div>
  );
};
