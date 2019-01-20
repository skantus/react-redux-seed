import React, { useState, useEffect } from 'react';
import { object, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Typography, Input, Button } from '@material-ui/core';
import { LoginUser } from 'store/actions';
import { styles } from './styles';
import { content } from './login.module.css';

const Login = props => {
  const { classes, isLogged, loginUser, hasError } = props;

  const [login, setLogin] = useState({ email: 'a@a.com', password: '1234' });
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleLogin = login => {
    if (login) {
      loginUser(login);
      setRedirectToReferrer(isLogged);
    }
  };

  useEffect(() => {
    if (!redirectToReferrer) handleLogin();
  });

  return (
    <div className={content}>
      <div className={classes.container}>
        <Typography component="h2" variant="display1" align="center" gutterBottom>
          Login
        </Typography>

        <Input
          placeholder="Enter your email"
          defaultValue={login.email}
          error={hasError}
          className={classes.input}
          onChange={({ target: { value } }) => setLogin({ ...login, email: value })}
          inputProps={{
            'aria-label': 'Description'
          }}
        />

        <Input
          placeholder="Enter your password"
          defaultValue={login.password}
          type="password"
          error={hasError}
          className={classes.input}
          onChange={({ target: { value } }) => setLogin({ ...login, password: value })}
          inputProps={{
            'aria-label': 'Description'
          }}
        />

        <Button color="primary" className={classes.button} onClick={() => handleLogin(login)}>
          Login
        </Button>
      </div>
    </div>
  );
};

Login.propTypes = {
  classes: object.isRequired,
  isLogged: bool.isRequired,
  loginUser: func.isRequired,
  hasError: bool.isRequired
};

const LoginComponent = withStyles(styles)(Login);

const mapStateToProps = ({ session: { isLogged, hasError } }) => ({
  isLogged,
  hasError
});

const mapDispatchToProps = {
  loginUser: LoginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
