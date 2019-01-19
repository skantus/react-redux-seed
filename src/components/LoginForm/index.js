import React, { useState } from 'react';
import { object } from 'prop-types';
import { withStyles, Typography, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { styles } from './styles';

const LoginForm = props => {
  const { classes } = props;

  const [login, setLogin] = useState({ email: '', password: '' });

  const handleLogin = login => {
    console.log('Login: ', login);
  };

  return (
    <div className={classes.container}>
      <Typography component="h2" variant="display1" align="center" gutterBottom>
        Login
      </Typography>

      <Input
        placeholder="Enter your email"
        defaultValue={login.email}
        error={false}
        className={classes.input}
        onChange={({ target: { value } }) => setLogin({ ...login, email: value })}
        inputProps={{
          'aria-label': 'Description'
        }}
      />

      <Input
        placeholder="Enter your password"
        defaultValue={login.password}
        error={false}
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
  );
};

LoginForm.propTypes = {
  classes: object.isRequired
};

export default withStyles(styles)(LoginForm);
