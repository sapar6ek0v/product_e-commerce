import styled from "styled-components"


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 950px;
  }

   @media (max-width: 992px) {
     max-width: 740px;
   }

  @media (max-width: 768px) {
    max-width: 550px;
  }

  @media (max-width: 576px) { 
    max-width: 450px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
  }

  @media (max-width: 320px) {
    max-width: 280px;
  }
`