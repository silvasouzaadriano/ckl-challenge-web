import styled from 'styled-components';

export const Container = styled.div`
  width: 1300px;
  background: #fff;
  padding: 0 30;
  border-top: 1px solid #000;
  margin-left: -500px;
  align-items: left;
  margin-top: -65px;

  p.welcome {
    font-family: Lato-Regular;
    font-size: 24px;
    margin-top: 50px;
  }

  p.welcome span {
    font-family: Lato-Regular;
    font-size: 24px;
    color: #4990e2;
    line-height: 29px;
  }

  p.interest {
    font-family: Lato-Regular;
    font-size: 14px;
    color: #3e433e;
    margin-bottom: 0;
    margin-left: -600px;
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 15px;
    margin-left: 285px;
  }

  ul li {
    display: flex;
    align-items: center;
    font-family: Lato-Regular;
    font-size: 14px;
    margin-left: 15px;
    padding: 5px 20px;
    border-radius: 100px;
  }

  ul li.li-1 {
    color: #d0021b;
    border: 1px solid #d0021b;
  }

  ul li.li-2 {
    color: #bd10e0;
    border: 1px solid #bd10e0;
  }

  ul li.li-3 {
    color: #4a90e2;
    border: 1px solid #4a90e2;
  }

  ul li.li-4 {
    color: #7cbb37;
    border: 1px solid #7cbb37;
  }

  ul li.li-5 {
    color: #f5a623;
    border: 1px solid #f5a623;
  }

  p.button {
    margin-top: 50px;
    background: #4a90e2;
    width: 242px;
    height: 52px;
    margin-left: 450px;
  }

  p.back {
    font-family: Lato-Regular;
    font-size: 16px;
    color: #4a90e2;
    margin-top: -50px;
    margin-left: -150px;
  }
`;
