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
      margin-top: 0.5rem;
    }
  }
`;

// Styles for the home page
export const StyledHome = styled.main`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  & .hero-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Assistant', sans-serif;
    color: #fff;
    position: relative;
    & span {
      color: #5bc0f8;
    }
    & p,
    h2 {
      width: 70%;
    }
    & h2 {
      font-size: 2.25rem;
      font-weight: 600;
      margin: 0;
    }
    & button {
      align-self: flex-start;
      margin-left: 15%;
      background: #5bc0f8;
      padding: 1rem;
      border: none;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;
      transition: all 0.35s ease;
      &:hover {
        box-shadow: 0px 0px 5px 0.5px rgba(255, 255, 255, 0.5);
        text-decoration: underline;
        transition: all 0.35s ease;
      }
    }
    & .icons-container {
      height: 5vh;
      width: 50%;
      position: absolute;
      bottom: 10%;
      left: 15%;
      display: flex;
      align-items: center;
      & img {
        height: 50px;
        width: 50px;
        margin-right: 3rem;
      }
    }
  }
  & .hero-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & img {
      position: absolute;
      bottom: 10%;
      height: 75%;
    }
    ${'' /* background: #000; */}
  }
`;

export const StyledFooter = styled.footer`
  height: 10vh;
  width: 100%;
  background: #181823;
`;
