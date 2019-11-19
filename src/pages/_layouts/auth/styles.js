import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    p {
      font-family: Lato-Regular;
      font-size: 24px;
      color: #3E433E;
      text-align: center;
      margin-left: -65px;
      margin-bottom: 70px;
    }
    input {
      width: 242.1px;
      height: 40px;
      border: 1px solid #BFBFBF
      height: 44px;
      padding: 0 15px;
      color: #3E433E;
      margin: 0 0 10px;
    }
    span {
      color: #3E433E;
      font-family: Lato-Regular;
      font-size: 14px;
      color: #3E433E;
      align-self: flex-start;
      margin: 0 0 10px;
      width: 76px;
      height: 17px;
    }
    button {
      margin: 5px 0 0;
      width: 242px;
      height: 52px;
      background: #4990e2;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-family: Lato-Regular;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#4990E2')};
      }
    }
  }
`;
