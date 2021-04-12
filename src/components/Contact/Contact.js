import React from 'react';

import { ContactForm } from './ContactForm';
import { StaticLogo } from '../Home/StaticLogo';

export const Contact = (props) => (
      <div className="container">
        <div className="form_container">
          <ContactForm color={props.color} />
        </div>
        <div className="contact-logo">
          <StaticLogo color={props.color} />
        </div>
      </div>
);
