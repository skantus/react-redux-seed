import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Login from 'components/Login';
import Home from 'components/Home';

const AuthRouter = withRouter(({ isLogged }) => (isLogged ? <Home path="/home" /> : <Login path="/login" />));

const AuthContainer = ({ isLogged }) => {
  return (
    <Router>
      <AuthRouter isLogged={isLogged} />
    </Router>
  );
};

AuthContainer.propTypes = {
  isLogged: bool.isRequired
};

const mapStateToProps = ({ session: { isLogged } }) => ({
  isLogged
});

export default connect(mapStateToProps)(AuthContainer);
