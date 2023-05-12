import { styled } from 'styled-components';

// Color palette
// dark blue: #181823
// light blue: #5bc0f8

// Styles for the nav bar
export const StyledNavBar = styled.nav`
  height: 10vh;
  width: 100%;
  background: #181823;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & a {
    text-decoration: none;
    color: #5bc0f8;
    margin: 1rem;
    font-size: 1.25rem;
    font-family: 'Assistant', sans-serif;
    font-weight: 300;
    &:hover {
      border-bottom: 1px solid #5bc0f8;
    }
  }
  & .logo-container {
    & img {
      height: 200px;
      width: 200px;
      margin-top: 2rem;
    }
  }
`;

export const StyledHome = styled.main`
  height: 80vh;
  width: 100%;
`;

export const StyledFooter = styled.footer`
  height: 10vh;
  width: 100%;
  background: #181823;
`;
