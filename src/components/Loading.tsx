import React from 'react';
import {Bars} from "react-loader-spinner";
import { Wrapper } from './styles/Loading.styled';


const Loading: React.FC = () => {
    return (
        <Wrapper>
            <Bars  width="100" color="black" height="100"/>
        </Wrapper>
    );
};

export default Loading;