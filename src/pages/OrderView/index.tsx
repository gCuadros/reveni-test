import './styles.scss';

import CardProduct from '../../components/CardProduct';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';

interface OrderData {
  id: number;
  name: string;
  quantity: number;
  total: string;
}

const OrderView: FC = () => {
  const locationData = useLocation();

  const orderData = locationData.state ? locationData.state : useProducts().data;
  const productsOrder = orderData.line_items;

  return (
    <main>
      <div className="title">
        <h3>We have found Your Order</h3>
        <p>Please Select the products that you want to return</p>
      </div>
      {productsOrder.map(({ id, name, quantity, total }: OrderData) => (
        <div key={id} id="container">
          <CardProduct orderData={{ name, quantity, total }} />
        </div>
      ))}
      <button>reutrn items</button>
    </main>
  );
};

export default OrderView;
