import React from 'react'
import {Route, Routes} from "react-router-dom"
import {GlobalStyles, Wrapper} from "./App.styled.js"
import Main from "./components/Main.js"

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                </div>
            </Wrapper>
        </>
    );
};

export default App;