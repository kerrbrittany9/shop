import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
import PropTypes from 'prop-types';
import Background from "./../../img/yoga-pose.jpg";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    var shopStyle = {
      backgroundImage: "url(" + Background + ")",
      height: '980px',
      width: '1000px',
      backgroundRepeat: 'no-repeat',
      marginLeft: '330px',
      paddingTop: '10px'
    };
    return (
      <div style={shopStyle}>
        <h1>Newest Products</h1>

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.store.products
  }
}

export default connect(mapStateToProps)(Product);
