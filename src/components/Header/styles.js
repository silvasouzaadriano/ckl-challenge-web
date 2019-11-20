import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30;
  border-bottom: 1px solid #000;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-left: 20px;
    }
  }
  aside {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
    }

    ul li {
      display: flex;
      align-items: center;

      font-family: Lato-Regular;
      font-size: 14px;
      color: #3e433e;

      margin-left: 30px;
    }

    span ul li {
      display: flex;
      align-items: center;

      font-family: Lato-Regular;
      font-size: 14px;
      color: #4990e2;

      margin-left: 50px;
    }
    button {
      border: 0;
      background: none;
    }
  }
`;
