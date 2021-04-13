import React from 'react';
import { Link } from 'react-router-dom';
import {
  useSpring,
  animated,
  config,
} from 'react-spring';
import { useForm, ValidationError } from '@formspree/react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const ContactForm = (props) => {
  const useStyles = makeStyles({
    root: {
      color: props.color,
      borderColor: props.color,
      fontFamily: 'Montserrat',
      fontSize: '1.25rem',
    },
  });

  const classes = useStyles();

  const props2 = useSpring({
    from: { opacity: 0, x: -500, y: 0 },
    to: { opacity: 1, x: 0, y: 0 },
    config: { duration: 500 },
  });

  const [state, handleSubmit] = useForm('mleaeode');
  if (state.succeeded) {
    return <div className="success_email">
              <p className="text"><span className="green bold" style={{ color: props.color }}>Thank you</span> for reaching out! I look forward to returning your message. Check out the rest of the site.</p>
              <div className="button_container">
                <Button component={Link} to="/projects" className={`button_container--button ${classes.root}`} variant="outlined">Projects</Button>
                <Button component={Link} to="/tech" className={`button_container--button ${classes.root}`} variant="outlined">Tech Stack</Button>
            </div>
          </div>;
  }

  return (
    <>
    <div className="form_header">
      <h1 className="cursive_heading" style={{ color: props.color }}>Say Hello<span className="white">!</span></h1>
      <div className="button_container">
            <Button component={Link} to="/" className={`button_container--button ${classes.root}`} variant="outlined">Home</Button>
            <Button component={Link} to="/projects" className={`button_container--button ${classes.root}`} variant="outlined">Projects</Button>
            <Button component={Link} to="/tech" className={`button_container--button ${classes.root}`} variant="outlined">Tech Stack</Button>
    </div>
      <p className="text form_text"><span className="green bold" style={{ color: props.color }}>Thank you</span> for visiting! Contact me with any comments or questions. I'd <span className="green bold" style={{ color: props.color }}>love</span> to hear from you! </p>
    </div>
    <animated.div style={props2}>
    <form className="form" onSubmit={handleSubmit} style={{ borderLeft: `13px solid ${props.color}` }}>
      <div className="form__group">
        <input id="email" type="email" className="form__input" placeholder="Email Address" name="email" required></input>
        <label htmlFor="email" className="form__label" style={{ color: props.color }}>Email Address</label>
        <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="form__group">
      <textarea
        className="form__input"
        rows='5'
        id="message"
        name="message"
        placeholder="Message"
      />
      <label htmlFor="message" className="form__label" style={{ color: props.color }}>Message</label>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      </div>
      <Button
        variant="outlined"
        className={`contact_form--button ${classes.root}`}
        type="submit"
        disabled={state.submitting}>
        Submit
      </Button>
    </form>
    </animated.div>
    </>
  );
};
