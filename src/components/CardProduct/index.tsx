import { FC, useState } from 'react';

import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { removeSizeonName } from '../../helpers/string.helpers';
import styled from 'styled-components';

interface CardProps {
  orderData: {
    name: string;
    quantity: number;
    total: string;
  };
}

const Img = styled.img`
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  &.product-quantity {
    justify-content: center;

    input {
      margin: 0px 20px;
    }
  }
`;

const QuantityInput = styled.input`
  height: 35px;
  width: 50px;
  padding: 10px 5px 10px 10px;
  border: 1px solid gray;
  border-radius: 4px;

  &.warning {
    border-color: #d40c0c;
    color: #d40c0c;

    &:hover,
    &:focus {
      border-color: #d40c0c;
      color: #d40c0c;
    }
  }
`;

const checkProductUnitsReturn = (productUnit: number, event: any) => {
  const maxProductUnit = parseInt(event.target.value);
  const inputTarget = event.target;

  productUnit < maxProductUnit
    ? inputTarget.classList.add('warning')
    : inputTarget.classList.remove('warning');
};

const CardProduct: FC<CardProps> = ({ orderData }) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        marginBottom: 5,
        padding: 5,
        minWidth: 600,
        flexGrow: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff')
      }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/446935/sub/goods_446935_sub18.jpg?width=722&impolicy=quality_70&imformat=chrome"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <TextBox>
                <Typography>Product Name:</Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {removeSizeonName(orderData.name, '#')}
                </Typography>
              </TextBox>
              <TextBox>
                <Typography>Quantity:</Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {orderData.quantity}
                </Typography>
              </TextBox>
              <TextBox>
                <Typography>Total amount:</Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {orderData.total}
                </Typography>
              </TextBox>
              <TextBox className="product-quantity">
                <Typography>Return</Typography>
                <QuantityInput
                  id="items-return"
                  type="number"
                  placeholder="0"
                  min="0"
                  max={orderData.quantity}
                  onChange={(e) => checkProductUnitsReturn(orderData.quantity, e)}
                />
                <Typography>Items</Typography>
              </TextBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardProduct;
