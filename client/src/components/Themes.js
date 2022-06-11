import {createGlobalStyle} from 'styled-components';

export const lightTheme ={
    body: '#AFE1AF',
    fontColor:'#355E3B', 
};

export const darkTheme = {
    body: '#355E3B',
    fontColor: '#AFE1AF'
};

export const GlobalStyles = createGlobalStyle`

    body {

        background-color: ${(props) => props.theme.body};

    }

`;