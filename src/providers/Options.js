/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from 'app/actions/actions';

class Options extends React.Component {
  state = {
    isCollapse: false,
    options: [],
  };

  componentDidMount() {
    async function getData() {
      await this.props.fetchData();
      this.setState({
        options: this.props.currency,
      });
    }
    getData();
  }

  render() {
    const { isCollapse, options } = this.state;
    const { render } = this.props;

    const renderProps = {
      isCollapse,
      options,
    };
    return render(renderProps);
  }
}

Options.propTypes = {
  render: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  currency: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCurrency()),
});
const mapStateToProps = (state) => {
  const { currency } = state;
  return currency;
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
