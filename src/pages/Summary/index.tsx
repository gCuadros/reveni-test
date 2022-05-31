import Button from '@mui/material/Button';
import { FC } from 'react';
import Grid from '@mui/material/Grid';
import ImgBox from '../../components/ImgBox';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRefund } from '../../hooks/useRefund';

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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Summary: FC = () => {
  const locationData = useLocation();
  const navigate = useNavigate();
  const refundData = locationData.state ? locationData.state : useRefund().data;
  const imgUrl =
    'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/446935/sub/goods_446935_sub18.jpg?width=722&impolicy=quality_70&imformat=chrome';

  console.log(refundData);
  const dispatchNewOrder = () => {
    navigate('/');
  };

  return (
    <main>
      <Grid container direction="column" justifyContent="space-between" alignItems="center">
        <Typography
          className="text-primary"
          gutterBottom
          variant="h4"
          component="div"
          sx={{ maxWidth: 400, textAlign: 'center' }}>
          You Refund has been processed!
        </Typography>
        <SummaryBox>
          <ImgBox imgUrl={imgUrl} altAttr={'summary'} />

          <Typography
            className="text-primary"
            gutterBottom
            variant="body1"
            sx={{ maxWidth: 300, textAlign: 'center' }}>
            Your money is on its way, should arrive to your account in less than 60 seconds
          </Typography>
          <Typography
            className="text-primary"
            gutterBottom
            variant="body1"
            sx={{ maxWidth: 300, textAlign: 'center' }}>
            <Typography className="text-primary" gutterBottom variant="h6">
              {refundData.total} {refundData.currency}
            </Typography>
            have been paid to the account
            <Typography className="text-primary" gutterBottom variant="h6">
              {refundData.refund_method_iban}
            </Typography>
          </Typography>
        </SummaryBox>

        <Button
          variant="contained"
          className="btn-primary"
          sx={{ width: 360, padding: 2 }}
          onClick={() => dispatchNewOrder()}>
          Process another order
        </Button>
      </Grid>
    </main>
  );
};

export default Summary;
