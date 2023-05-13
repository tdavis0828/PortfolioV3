import { styled } from 'styled-components';

// Color palette
// dark blue: #181823
// light blue: #5bc0f8
// black: #181818

// Styles for the nav bar
export const StyledNavBar = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & a {
    text-decoration: none;
    color: #5bc0f8;
    margin: 1rem 3rem;
    font-size: 1.25rem;
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

// Styles for the header on home page
export const StyledHeader = styled.main`
  height: 80vh;
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
      font-size: 1.15rem;
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
        cursor: pointer;
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
  }
`;

// Styles for the skills section on home page
export const StyledSkills = styled.section`
  height: 55vh;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & h2 {
  }
  & .front-end,
  .back-end {
    height: 200px;
    width: 765px;
    border-radius: 3px;
    border: 5px solid #5bc0f8;
    transition: all 0.35s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 2.5rem;
    &:hover {
      box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.6);
      transition: all 0.35s ease;
      transform: scale(105%);
    }
    & .skills {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & img {
        height: 50px;
        width: 50px;
      }
      & p {
        color: #5bc0f8;
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 5px;
      }
    }
  }
  & .header-text {
    position: absolute;
    top: 0;
    left: 7.5%;
    & span {
      color: #5bc0f8;
    }
  }
`;

export const StyledFooter = styled.footer`
  height: 10vh;
  width: 100%;
`;
