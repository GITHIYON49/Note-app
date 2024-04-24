import React from "react";
import "./style.scss";
import { BsFillPencilFill } from "react-icons/bs";
import { Strings } from "../../data/Strings";

function Header() {
  const { applicationTitle } = Strings;
  return (
    <>
      <header className="header-container">
        <h1 className="header-container__tittle">
          {applicationTitle}
          <BsFillPencilFill />
        </h1>
      </header>
    </>
  );
}

export default Header;
