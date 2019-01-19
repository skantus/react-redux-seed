import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import LoginForm from 'components/LoginForm';
import { content } from './home.module.css';

class Home extends React.Component {
  render() {
    return (
      <Grid fluid className={content}>
        <LoginForm />
      </Grid>
    );
  }
}

export default connect()(Home);
