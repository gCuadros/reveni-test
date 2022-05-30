import './styles.scss';

import { FC } from 'react';

interface CardProps {
  orderData: {
    name: string;
    quantity: number;
    total: string;
  };
}
const CardProduct: FC<CardProps> = ({ orderData }) => {
  return (
    <>
      <div className="product-image">
        <img
          src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/447527/sub/goods_447527_sub19.jpg?width=722&impolicy=quality_70&imformat=chrome"
          alt=""
        />

        <div className="info">
          <h3> Description</h3>
          <ul>
            <li>
              <strong>size : </strong>5 Ft{' '}
            </li>
            <li>
              <strong>Material: </strong>Eco-Friendly
            </li>
          </ul>
        </div>
      </div>
      <div className="product-details">
        <p className="information">Product Name:{orderData.name}</p>
        <p className="information">Quantity:{orderData.quantity}</p>
        <p className="information">Total amount:{orderData.total}</p>
        <div className="return-box">
          <p className="information">Return</p>
          <input type="number" id="return-quantity" placeholder="0"></input>
          <p className="information">Items</p>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
