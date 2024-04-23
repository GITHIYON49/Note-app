import React from "react";
import "./style.scss";
import { BsFillPencilFill } from "react-icons/bs";
import { Strings } from "../../data/Strings";

function Header() {
  return (
    <>
      <header className="header-container">
        <h1 className="header-container__tittle">
          {Strings.applicationTitle}
          <BsFillPencilFill />
        </h1>
      </header>
    </>
  );
}

export default Header;
