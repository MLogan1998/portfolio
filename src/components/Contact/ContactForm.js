import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const ContactForm = () => {
  const useStyles = makeStyles({
    root: {
      color: '#1de9b6',
      borderColor: '#1de9b6',
      fontFamily: 'Montserrat',
      fontSize: '1.25rem',
    },
  });

  const classes = useStyles();

  const [state, handleSubmit] = useForm('mleaeode');
  if (state.succeeded) {
    return <div className="success_email">
              <p className="text"><span className="green bold">Thank you</span> for reaching out! I look forward to returning your message. Check out the rest of the site.</p>
              <div className="button_container">
                <Button component={Link} to="/projects" className={`button_container--button ${classes.root}`} variant="outlined">Projects</Button>
                <Button component={Link} to="/tech" className={`button_container--button ${classes.root}`} variant="outlined">Tech Stack</Button>
            </div>
          </div>;
  }

  return (
    <>
    <div className="form_header">
      <h1 className="primary_heading">Say Hello<span className="white">!</span></h1>
      <p className="text"><span className="green bold">Thank you</span> for visiting! Contact me with any comments or questions. I'd <span className="green bold">love</span> to hear from you! </p>
    </div>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <input id="email" type="email" className="form__input" placeholder="Email Address" name="email" required></input>
        <label htmlFor="email" className="form__label">Email Address</label>
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
      <label htmlFor="message" className="form__label">Message</label>
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
    </>
  );
};
