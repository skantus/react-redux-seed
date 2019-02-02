import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import StackNavigator from './StackNavigator';
import { signInRoutes, signOutRoutes } from './routes';

const validateInitialStack = loggedIn =>
  loggedIn
    ? { initialRoute: signInRoutes.initialRoute, routes: signInRoutes.routes }
    : { initialRoute: signOutRoutes.initialRoute, routes: signOutRoutes.routes };

/* eslint-disable react/prop-types */
const AuthRouter = ({ isLogged }) => {
  const { initialRoute, routes } = validateInitialStack(isLogged);
  return <StackNavigator initialRoute={initialRoute} routes={routes} />;
};

const MainStackNavigator = props => <Route component={() => AuthRouter({ ...props })} />;

MainStackNavigator.propTypes = {
  isLogged: bool.isRequired
};

const mapStateToProps = ({ session: { isLogged } }) => ({
  isLogged
});

export default withRouter(connect(mapStateToProps)(MainStackNavigator));
