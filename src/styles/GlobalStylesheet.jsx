import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        scroll-behavior: smoooth;
        box-sizing: border-box;
        background: #181823;
        font-family: 'Assistant', sans-serif;
        background-attachment: fixed;
        /* width */
&::-webkit-scrollbar {
  width: 5px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: #181823;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background: #5bc0f8;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
    }
`;
