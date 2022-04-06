import styled from "styled-components"

export const Wrapper = styled.main`
  font-family: 'Open Sans', sans-serif;
  padding: 32px 0;
  
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 24px;
  }

  h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: #828282;
    margin-bottom: 22px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
  
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  button {
    border: 1px solid transparent;
    border-radius: 5px;
    background: #000000;
    color: white;
    text-transform: uppercase;
    padding: 10px 15px;
    transition: .4s linear;
    &:hover {
      border: 1px solid #000000;
      background: white;
      color: #000000;
    }
    &:active {
      background: rgba(39,39,39,0.77)
    }
  }

  @media (max-width: 768px) {
    .row {
      margin: 0 -10px;
    }
  }
  
  @media (max-width: 480px) {
    .d-flex {
      flex-wrap: wrap;
    }
  }
`