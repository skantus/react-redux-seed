import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Details from 'components/Details';
import { Increment, Decrement } from 'store/actions';
import { content } from './home.module.css';

class Home extends React.Component {
  render() {
    const { Increment, Decrement } = this.props;
    return (
      <Grid fluid className={content}>
        <Row>
          <button onClick={Decrement}>Decrement</button>
          <Col>
            <Details />
          </Col>
          <button onClick={Increment}>Increment</button>
        </Row>
      </Grid>
    );
  }
}

Home.propTypes = {
  Increment: func.isRequired,
  Decrement: func.isRequired
};

const mapDispatchToProps = {
  Increment,
  Decrement
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
