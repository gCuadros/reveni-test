import { FC } from 'react';
import Grid from '@mui/material/Grid';
import ImgBox from '../../components/ImgBox';
import { Login } from '../../components/Login';
import { SubmitHandler } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
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

const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fafb;
  padding: 20px;
  border: 1px solid #f8fafb;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const OrderCheck: FC = () => {
  const { data, isSuccess, isError } = useProducts();
  const navigate = useNavigate();
  const imgUrl = '../../public/resoruces/products.jpg';

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
        <Grid item xs={3}>
          <Typography
            className="text-primary"
            gutterBottom
            variant="h4"
            component="div"
            sx={{ maxWidth: 400, textAlign: 'center' }}>
            Welcome!
          </Typography>
          <Typography
            className="text-primary"
            gutterBottom
            variant="body1"
            sx={{ maxWidth: 400, textAlign: 'center', marginBottom: 4 }}>
            Enter your mail and your Order number to check your to check your available returns
          </Typography>
          <SummaryBox>
            <ImgBox imgUrl={imgUrl} altAttr={'products'} />
            <Login actionSubmit={onSubmit} />
          </SummaryBox>
        </Grid>
      </Grid>
    </main>
  );
};

export default OrderCheck;
