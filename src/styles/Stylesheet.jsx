import { styled } from 'styled-components';

// Color palette
// dark blue: #181823
// light blue: #5bc0f8
// black: #181818

// Styles for the nav bar
export const StyledNavBar = styled.nav`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 0.35 ease;
  &.light {
    background: #5bc0f8;
    transition: all 0.35 ease;
    box-shadow: 0 3px 5px -2px rgba(255, 255, 255, 0.45);
    & a {
      color: #181823;
    }
  }
  & a {
    text-decoration: none;
    color: #5bc0f8;
    margin: 1rem 3rem;
    font-size: 1.25rem;
    font-weight: 500;
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
      font-size: 3.5rem;
      font-weight: 500;
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
        transition: all 0.1s ease;
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
        padding: 7px;
        transition: all 0.25s ease;
        border-radius: 50%;
        &:hover {
          box-shadow: 0px 0px 6px 1px rgba(255, 255, 255, 0.65);
          transform: scale(110%);
          transition: all 0.25s ease;
        }
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
  height: 75vh;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & .front-end,
  .back-end {
    height: 200px;
    width: 765px;
    border-radius: 3px;
    border: 2px solid #5bc0f8;
    transition: all 0.35s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 2.5rem;
    & h3 {
      font-size: 1.75rem;
      font-weight: 400;
      margin-top: 1rem;
    }
    & .skills {
      height: 100px;
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
    top: 10%;
    left: 7.5%;
    & h2 {
      font-size: 3rem;
      font-weight: 500;
      margin: 0;
    }
    & span {
      color: #5bc0f8;
    }
  }
`;

// Styles for the project cards
export const StyledProjects = styled.section`
  height: 100vh;
  width: 90%;
  margin: auto;
  & .image-slider {
    ${'' /* height: 80%; */}
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledProjectCard = styled.div`
  height: 400px;
  width: 650px;
  background: #fff;
  place-self: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
  ${
    '' /* &:hover {
    border: 1px solid #5bc0f8;
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    transform: scale(105%);
  } */
  }
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;
    width: 100%;
    & .project-info {
      dislpay: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 100%;
      & p {
        margin: 0;
        padding: 0 10px;
      }
      & a {
        text-decoration: none;
        color: #181823;
        font-size: 1.45rem;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 0 10px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    & .project-tags {
      height: 100%;
      width: 100%;
      color: #fff;
      & p {
        margin: 15px;
        padding: 5px;
        border-radius: 5px;
        color: #181823;
        font-size: 1.1rem;
      }
    }
  }
  & img {
    width: 100%;
    height: 75%;
    border-radius: 5px 5px 0px 0px;
  }
`;

export const StyledFooter = styled.footer`
  height: 10vh;
  width: 100%;
`;
