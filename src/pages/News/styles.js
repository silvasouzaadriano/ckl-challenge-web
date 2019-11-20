import styled from 'styled-components';

export const NewsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  list-style: none;
  padding: 0 30;
  max-width: 1170px;
  margin: 0 auto;

  li:nth-child(3n + 1) {
    figure.picture-legend figcaption {
      top: -110px;
      left: 200px;
    }
  }

  li:first-child {
    span.banner p img {
      align-self: center;
      max-width: 555px;
      margin-top: 5px;
      size: 555px;
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
    figure.picture-legend figcaption {
      top: -200px;
      left: 190px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
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

    figure {
      font-family: Lato-Regular;
      font-size: 18px;
      text-align: center;
      color: #fff;
      margin: 5px;
    }

    figure.picture-legend figcaption {
      opacity: 0;
      position: 332px 317px;
      position: relative;
      text-align: center;

      top: -110px;
      left: 50px;

      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid #ffffff;
      width: 151px;

      height: 45px;
      padding: 10px;

      transition: opacity 1s;
    }

    figure.picture-legend:hover figcaption {
      opacity: 1;
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
