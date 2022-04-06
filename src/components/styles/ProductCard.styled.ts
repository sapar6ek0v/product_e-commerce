import styled from "styled-components"

export const Wrapper = styled.div`
  width: 25%;
  padding: 15px;

  .card {
    background: #FFFFFF;
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    height: 100%;
    position: relative;
    transition: .4s linear;
    transform: scale(1);
    &:hover {
      box-shadow: rgb(38, 57, 77) 0 20px 30px -10px;
      transform: scale(1.05);
    }

    img {
      width: 100%;
      object-fit: cover;
      height: 404px;
      min-height: 404px;
      min-width: 100%;
      border-radius: 8px 8px 0 0;
      border: none;
      filter: brightness(60%);
      transition: .4s;
      background: black;
    }

    &_selling {
      padding: 16px;
      display: flex;
      justify-content: space-between;
    }

    &_prices {
      text-align: end;
    }

    &_available, &_price {
      display: block;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      color: #808080;
    }

    &_black {
      font-size: 18px;
      font-weight: bold;
      color: black;
    }

    &_blue {
      font-size: 18px;
      font-weight: bold;
      color: #616be2;
      text-transform: uppercase;
    }

    &_creator {
      position: absolute;
      z-index: 10;
      top: 16px;
      left: 16px;

      p {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: #FFFFFF;
      }

      span {
        color: rgba(202,202,200,0.65);
        font-size: 13px;
      }
    }

    &_type {
      position: absolute;
      z-index: 10;
      bottom: 106px;
      left: 16px;
      word-break: break-all;
      overflow: auto;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
      font-weight: 700;
    }
  }

  @media (max-width: 992px) {
    width: 33.33%;
  }

  @media (max-width: 768px) {
    width: 50%;
    padding: 15px 10px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
  
  @media (max-width: 480px) {
    .card:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 320px) {
    .card:hover {
      transform: scale(1.02);
    }
  }
`