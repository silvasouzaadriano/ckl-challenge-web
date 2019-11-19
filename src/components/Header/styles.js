import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30;
  border-bottom: 1px solid #000;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-left: -210px;
      margin-right: 250px;
      padding-right: 500px;
      border-right: 1px solid #eee;
    }
    & > a {
      color: #d44059;
      font-weight: bold;
      max-height: 43px;
      opacity: 0.7;
      transition: 0.2s;
      &:hover {
        opacity: 1;
        transform: translateY(-2px);
      }
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
