import React from "react";
import "./style.scss";
import { BsFillPencilFill } from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header-container">
        <h1 className="header-container__tittle">
          Notes App
          <BsFillPencilFill />
        </h1>
      </header>
    </>
  );
}

export default Header;
