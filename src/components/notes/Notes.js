import React from "react";
import "./style.scss";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function Notes({ data, handleEdit, handleDelete }) {
  return (
    <>
      <div>
        <div className="card">
          <div className="card__container">
            <h4 className="card__container__tittle">{data.name}</h4>
            <p className="card__container__content">{data.description}</p>
            <div className="card__container__btn">
              <div className="card__container__btn__one">
                <BiSolidPencil onClick={handleEdit} />
              </div>
              <div className="card__container__btn__two">
                <MdDelete onClick={handleDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
