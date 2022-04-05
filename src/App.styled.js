import styled, {createGlobalStyle} from "styled-components"

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  .main {
    flex: 1
  }
`

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`