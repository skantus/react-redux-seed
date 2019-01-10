import React from 'react';
import { string } from 'prop-types';
import { Grid } from 'react-flexbox-grid';
import { content } from './home.module.css';

const Home = ({ tech }) => (
  <Grid fluid className={content}>
    <div>Tech: {tech}</div>
  </Grid>
);

Home.propTypes = {
  tech: string.isRequired
};

export default Home;
