import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./App";
import {ThemeProvider} from "styled-components";
import {Theme} from "./App.styled";


ReactDom.render(
    <BrowserRouter>
        <ThemeProvider theme={Theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)