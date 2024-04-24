import React from "react";
import { Button, Input, TextArea } from "../index";
import { LuRefreshCw } from "react-icons/lu";
import { Strings } from "../../data/Strings";
import "./style.scss";

function FormInput({
  newValue,
  handleChange,
  handleAdd,
  handleUpdate,
  handelClearInput,
  update,
}) {
  const {
    titleInput,
    inputName,
    inputDescription,
    textArea,
    typeBtn,
    placeHolderName,
    addBtn,
    updateBtn,
  } = Strings;

  return (
    <>
      <form className="form-container">
        <div
          className="mb-3 form-container__one"
          controlId="exampleForm.ControlInput1"
        >
          <Input
            name={inputName}
            label={titleInput}
            value={newValue.name}
            placeholder={placeHolderName}
            onChange={(e) => handleChange(e)}
            className="form-container__one__tittle-input"
          />
        </div>
        <div
          className="mb-3 form-container__two"
          controlId="exampleForm.ControlTextarea1"
        >
          <TextArea
            name={inputDescription}
            label={textArea}
            className="form-container__two__desc-area"
            value={newValue.description}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-container__btn">
          <Button
            className="form-container__btn__btn-1"
            variant="outline-success"
            onClick={() => {
              !update ? handleAdd() : handleUpdate();
            }}
            add={!update ? addBtn : updateBtn}
            type={typeBtn}
          />

          <LuRefreshCw
            className="form-container__btn__refresh"
            onClick={() => handelClearInput()}
          />
        </div>
      </form>
    </>
  );
}

export default FormInput;
