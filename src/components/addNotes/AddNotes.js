import React, { useState } from "react";
import Notes from "../Notes/Notes";
import { LuRefreshCw } from "react-icons/lu";
import { toast } from "react-toastify";
import { Button, Input, TextArea, Label, NoRecordFound } from "../index";
import { Strings } from "../../data/Strings";
import "./style.scss";

function AddNotes() {
  const [value, setValue] = useState([]);
  const [update, setUpdate] = useState(false);
  const [newId, setNewId] = useState(null);
  const [newValue, setNewValue] = useState({
    name: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewValue((preData) => ({
      ...preData,
      [name]: value,
    }));
  }

  function handleAdd() {
    if (newValue.name === "" || newValue.description === "") {
      toast.error(`${Strings.emptyMsg}`);
    } else {
      setValue([...value, newValue]);
      toast.success(`${newValue.name}${Strings.addMsg}`);
    }
  }

  function handelClearInput() {
    setNewValue({
      name: "",
      description: "",
    });
  }

  function handleEdit(id) {
    setUpdate(true);
    let newData = [...value];
    let data = newData[id];
    setNewValue({ name: data.name, description: data.description });
    setNewId(id);
  }

  function handleUpdate() {
    let data = [...value];

    data.splice(newId, 1, newValue);
    setValue(data);
    setUpdate(false);
    toast.warning(`${newValue.name} ${Strings.updateMsg}`);
  }

  function handelDelete(id) {
    let newData = [...value];
    toast.error(`${newData[id].name} ${Strings.deleteMsg}`);

    newData.splice(id, 1);

    setValue(newData);
  }
  return (
    <>
      <section className="section">
        <div className="section__card">
          <form className="section__card__form-container">
            <div className="mb-3 section__card__form-container__one">
              <Label
                className="section__card__form-container__one__tittle"
                names={Strings.titleInput}
              />
              <Input
                name={Strings.inputName}
                value={newValue.name}
                placeholder={Strings.placeHolderName}
                onChange={(e) => handleChange(e)}
                className="section__card__form-container__one__tittle-input"
              />
            </div>
            <div className="mb-3 section__card__form-container__two">
              <Label
                className="section__card__form-container__two__desc"
                names={Strings.textArea}
              />
              <TextArea
                name={Strings.inputDescription}
                className="section__card__form-container__two__desc-area"
                value={newValue.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="section__card__form-container__btn">
              <Button
                className="section__card__form-container__btn__btn-1"
                onClick={() => {
                  !update ? handleAdd() : handleUpdate();
                }}
                add={!update ? Strings.addBtn : Strings.updateBtn}
                type={Strings.typeBtn}
              />

              <LuRefreshCw
                className="section__card__form-container__btn__refresh"
                onClick={() => handelClearInput()}
              />
            </div>
          </form>
        </div>

        <div className="section__Notes">
          {value.length === 0 ? (
            <div className="section__Notes__No-Record">
              <NoRecordFound />
            </div>
          ) : (
            value?.map((item, id) => {
              return (
                <Notes
                  data={item}
                  key={id}
                  handleEdit={() => {
                    handleEdit(id);
                  }}
                  handleDelete={() => {
                    handelDelete(id);
                  }}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

export default AddNotes;
