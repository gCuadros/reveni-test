import Button from '@mui/material/Button';
import CardProduct from '../../components/CardProduct';
import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useRefund } from '../../hooks/useRefund';

interface OrderData {
  id: number;
  name: string;
  quantity: number;
  total: string;
}

const OrderView: FC = () => {
  const locationData = useLocation();
  const { data, isSuccess, isError } = useRefund();
  const navigate = useNavigate();
  const orderData = locationData.state ? locationData.state : useProducts().data;
  const productsOrder = orderData.line_items;

  const dispatchRefund = () => {
    if (isSuccess) {
      navigate('/summary', { state: data });
    }
  };

  return (
    <main>
      <Grid container direction="column" justifyContent="space-between" alignItems="center">
        <div className="title">
          <Typography className="text-primary" gutterBottom variant="h3" component="div">
            We have found Your Order
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: 10 }}>
            Please Select the products that you want to return
          </Typography>
        </div>
        {productsOrder.map(({ id, name, quantity, total }: OrderData) => (
          <div key={id} id="container">
            <CardProduct orderData={{ name, quantity, total }} />
          </div>
        ))}
        <Button
          variant="contained"
          className="btn-primary"
          sx={{ width: 360, padding: 2 }}
          onClick={() => dispatchRefund()}>
          Return items
        </Button>
      </Grid>
    </main>
  );
};

export default OrderView;
