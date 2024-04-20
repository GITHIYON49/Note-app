import React from "react";
import "./style.scss";
import Card from "react-bootstrap/Card";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

function Notes({ data, setValue, index, value, handleEdit }) {
  function handelDelete() {
    let newData = [...value];

    newData.splice(index, 1);

    setValue(newData);
    toast.error("Delete Sucessfully");
  }
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
                <MdDelete onClick={() => handelDelete()} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Notes;
