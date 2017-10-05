import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
import PropTypes from 'prop-types';


class Product extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    var matStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    gridGap: '3% 3%'
  }

    var imageStyle = {
      width: '200',
      height: '200'
    }
    return (
      <div>
        <div>
        <h1>Newest Products</h1>
        <ul>
        {this.props.products.map(function(product) {
          return <li key={product.sku}>{product.product}</li>
        })}
        </ul>
        </div>
        <div>
          <h3>Mats</h3>
          <div>
            <img style={imageStyle} src="https://i.pinimg.com/736x/d0/a7/36/d0a7369edbb661d025d68789b99287b8--rose-prints-christmas-wish-list.jpg"/>
            <h4>Prana Mat</h4>
            <p>$45.00</p>
          </div>
          <div>
            <img style={imageStyle} src="https://st-adidas.cdnrnd.com/adidas/mnresize/1500/1500/Content/media/ProductImg/original/AJ9515-adidas-yoga-mati-635898903084654970.jpg"/>
            <h4>Adidas Mat</h4>
            <p>$64.00</p>
          </div>
          <div>
            <img style={imageStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrq9e4kGpqykZ8JCJUMGg5DNHyNCi6og4JJlB1rwax9rDoV38xw"/>
            <h4>Encrypted Mat</h4>
            <p>$70.00</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.cart
  }
}

export default connect(mapStateToProps)(Product);
