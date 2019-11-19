import styled from 'styled-components';

export const NewsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  list-style: none;

  li:first-child {
    span.banner p img {
      align-self: center;
      max-width: 555px;
      margin-top: 5px;
    }
    span.title {
      font-family: Lato-Regular;
      font-size: 29px;
      color: #000000;
      letter-spacing: 0;
      margin-top: 10px;
    }
    span.description {
      display: none;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border-bottom: 1px solid #e4e4e4;

    span.interest p {
      font-family: Lato-Regular;
      font-size: 10px;
    }

    span.banner p img {
      align-self: center;
      max-width: 262px;
      margin-top: 5px;
    }

    span.title {
      font-family: Lato-Regular;
      font-size: 17px;
      color: #000000;
      letter-spacing: 0;
      margin-top: 10px;
    }

    span.owner {
      display: flex;
      align-items: center;
    }
    span.owner img {
      width: 32px;
      height: 32px;
      border-radius: 50px;
      margin-top: 10px;
    }

    span.owner span {
      font-family: OpenS ans-Italic;
      font-size: 13px;
      color: #808080;
      margin-left: 10px;
      margin-top: 10px;
    }

    span.description {
      font-family: OpenSans;
      font-size: 14px;
      color: #686868;
      letter-spacing: 0;
      margin-top: 30px;
    }
  }
`;
