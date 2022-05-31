import { FC } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const LoginForm = styled.form`
  width: 320px;
  padding: 30px;
`;

const LoginField = styled.div`
  padding: 20px 0px;
  position: relative;
`;

const LoginIcon = styled.i`
  position: absolute;
  top: 30px;
  color: #d8f5ec;
`;

const LoginInput = styled.input`
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    border-bottom-color: #004060;
  }
`;

const LoginSubmit = styled.button`
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #004060;
  box-shadow: 0px 2px 2px #004060;
  cursor: pointer;
  transition: 0.2s;

  &:active,
  &:focus,
  &:hover {
    border-color: #004060;
    outline: none;
  }
`;

const ButtonLoginText = styled.span``;

const ButtonLoginIcon = styled.i`
  font-size: 24px;
  margin-left: auto;
  color: #004060;
`;

interface LoginProps {
  actionSubmit: (params: any) => any;
}

export const Login: FC<LoginProps> = ({ actionSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <LoginForm onSubmit={handleSubmit(actionSubmit)}>
      <LoginField>
        <LoginIcon />
        <LoginInput
          type="text"
          className="login__input"
          placeholder="User name / Email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </LoginField>
      <LoginField>
        <LoginIcon />
        <LoginInput
          type="text"
          className="login__input"
          placeholder="Order Number"
          {...register('order', { required: true })}
        />
        {errors.order && <span>This field is required</span>}
      </LoginField>
      <LoginSubmit>
        <ButtonLoginText>Check Order</ButtonLoginText>
        <ButtonLoginIcon />
      </LoginSubmit>
    </LoginForm>
  );
};
