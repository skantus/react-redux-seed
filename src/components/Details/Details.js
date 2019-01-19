import React from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import { content } from './details.module.css';

class Details extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <Grid fluid className={content}>
        <div>Counter: {counter}</div>
      </Grid>
    );
  }
}

Details.propTypes = {
  counter: number
};

const mapStateToProps = ({ counterReducer }) => ({
  counter: counterReducer.counter
});

export default connect(mapStateToProps)(Details);
