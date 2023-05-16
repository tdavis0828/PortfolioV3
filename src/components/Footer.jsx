import React from "react";
import { StyledFooter } from "../styles/Stylesheet";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>
        designed & developed by Tyler Davis. Copyright ©{currentYear} All rights
        reserved.
      </p>
    </StyledFooter>
  );
}

export default Footer;
