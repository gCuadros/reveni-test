import './styles.scss';

import { FC } from 'react';
import Grid from '@mui/material/Grid';
import { Login } from '../../components/Login';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';

type Inputs = {
  email: string;
  order: string;
};

type UserData = {
  email: string;
  order: string;
};

const OrderCheck: FC = () => {
  const { data, isSuccess, isError } = useProducts();
  const navigate = useNavigate();

  const validateUserInfo = (userData: UserData) => {
    const userEmail = data && data.customer_email;
    const userOrder = data && data.number;

    return userData.email === userEmail && userData.order === userOrder;
  };

  const onSubmit: SubmitHandler<Inputs> = (userData) => {
    if (isSuccess && validateUserInfo(userData)) {
      navigate('/order', { state: data });
    }
  };

  return (
    <main className="order-check-view">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <div className="container">
            <div className="screen">
              <div className="screen__content">
                <Login actionSubmit={onSubmit} />
              </div>
              <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default OrderCheck;
