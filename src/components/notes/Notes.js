import React from "react";
import "./style.scss";
import Card from "react-bootstrap/Card";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function Notes({ data, handleEdit, handleDelete }) {
  return (
    <>
      <div>
        <Card className="card">
          <Card.Body className="card__container">
            <Card.Title className="card__container__tittle">
              {data.name}
            </Card.Title>
            <Card.Text className="card__container__content">
              {data.description}
            </Card.Text>
            <div className="card__container__btn">
              <div className="card__container__btn__one">
                <BiSolidPencil onClick={handleEdit} />
              </div>
              <div className="card__container__btn__two">
                <MdDelete onClick={handleDelete} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Notes;
