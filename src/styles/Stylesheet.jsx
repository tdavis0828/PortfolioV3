import { styled } from 'styled-components';

// Color palette
// dark blue: #181823
// light blue: #5bc0f8
// black: #181818

// Styles for the nav bar
export const StyledNavBar = styled.nav`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.35 ease;
  background: #181823;
  &.light {
    transition: all 0.35 ease;
    box-shadow: 0 1px 5px 2px rgba(255, 255, 255, 0.05);
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
  height: 85vh;
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
    & .view-work {
      text-decoration: none;
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
      bottom: 3%;
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
  height: 100vh;
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
    background: rgba(255, 255, 255, 0.01);
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
    width: 80%;
    position: absolute;
    top: 10%;
    left: 7.5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
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
  height: 115vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  position: relative;
  & .header-text {
    width: 80%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
    position: absolute;
    top: -10%;
    left: 7.5%;
    color: #fff;
    & h2 {
      font-size: 3rem;
      font-weight: 500;
      margin: 0;
    }
    & span {
      color: #5bc0f8;
    }
  }
  & .github-link {
    position: absolute;
    bottom: 0;
    right: 7%;
    & a {
      text-decoration: none;
      color: #5bc0f8;
      font-size: 1.45rem;
      font-weight: 300;
      letter-spacing: 1px;
      &:hover {
        text-decoration: underline;
      }
    }
`;
export const StyledProjectCard = styled.div`
  height: 350px;
  width: 550px;
  background: rgba(255, 255, 255, 0.1);
  place-self: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
    &:hover {
      border: 1px solid #5bc0f8;
      transition: all 0.25s ease;
    }
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 55%;
      width: 100%;
      & .project-info {
        height: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        & a {
          color: #5bc0f8;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 0 10px;
          &:hover {
            text-decoration: underline;
          }
        }
        & p {
          margin: 15px;
          padding: 5px 7px;
          border-radius: 30px;
          color: #fff;
        }
      }
      & .project-desc {
        height: 20px;
        color: #000;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        & p {
          margin: 10px;
          color: #fff;
        }
      }
    }
    & img {
      width: 100%;
      min-height: 75%;
      border-radius: 5px 5px 0px 0px;
    }
  }
`;

export const StyledReferences = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & .header-text {
    width: 80%;
    position: absolute;
    top: 0;
    left: 7.5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
    & h2 {
      font-size: 3rem;
      font-weight: 500;
      margin: 0;
      color: #fff;
    }
    & span {
      color: #5bc0f8;
    }
  }
  & .card-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledReferenceCard = styled.div`
  height: 400px;
  width: 300px;
  margin: 2rem;
  margin-top: 10rem;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  & img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 0.5rem;
  }
  & p {
    &.name {
      font-size: 1.3rem;
    }
    &.title {
      color: rgba(255, 255, 255, 0.55);
    }
    margin: 0;
    & span {
      color: #5bc0f8;
    }
  }
  & a {
    color: #fff;
  }
  & .button {
    margin: 1rem;
    background: #181823;
    color: #5bc0f8;
    padding: 1rem 2rem;
    border: 1px solid #5bc0f8;
    border-radius: 5px;
    font-size: 1.15rem;
    cursor: pointer;
    transition: all 0.35s ease;
    &:hover {
      background: #5bc0f8;
      color: #181823;
      transition: all 0.35s ease;
    }
  }
`;

export const StyledContact = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & .header-text {
    width: 80%;
    position: absolute;
    top: 0;
    left: 7.5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
    & h2 {
      font-size: 3rem;
      font-weight: 500;
      margin: 0;
      color: #fff;
    }
  }
  & .form-container,
  .socials {
    height: 450px;
    width: 400px;
    border-radius: 5px;
    margin: 1rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .form-container {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.1);
    & form {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      & label {
        color: #5bc0f8;
      }
      & input,
      textarea {
        width: 350px;
        height: 30px;
        display: block;
        margin: 0.5rem;
        border: none;
        border-radius: 5px;
        &::placeholder {
          padding-left: 0.5rem;
        }
        &:focus {
          outline: none;
        }
      }
      textarea {
        height: 75px;
      }
      & button {
        width: 350px;
        height: 35px;
        font-size: 1.15rem;
        border: 1px solid #5bc0f8;
        color: #5bc0f8;
        background: none;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.35s ease;
        &:hover {
          background: #5bc0f8;
          color: #181823;
          transition: all 0.35s ease;
        }
      }
    }
  }
  & .socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    & .info-container {
      & div {
        display: flex;
        align-items: center;
        & p,
        a {
          text-decoration: none;
          color: #fff;
          font-size: 1.45rem;
          font-weight: 300;
        }
        & img {
          height: 35px;
          width: 35px;
          margin: 1rem;
        }
      }
    }
    & .icons {
      img {
        width: 50px;
        height: 50px;
        margin: 0.5rem 1.25rem;
      }
    }
  }
`;

export const StyledFooter = styled.footer`
  height: 65px;
  width: 100%;
  color: #181823;
  background: #5bc0f8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;

export const StyledAlert = styled.div`
  width: 1000px;
  height: 35px;
  position: fixed;
  top: 15%;
  left: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.4);
  & p {
    font-size: 1.25rem;
    color: #fff;
  }
`;
