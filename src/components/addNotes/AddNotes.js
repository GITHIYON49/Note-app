import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Notes from "../notes/Notes";
import { LuRefreshCw } from "react-icons/lu";
import { toast } from "react-toastify";
import { Button, Input, TextArea, Label } from "../index";
import { Stringes } from "../../data/Strings";
import "./style.scss";

function AddNotes() {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
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
      toast.error("Fill Out The Empty Fields");
    } else {
      setValue([...value, newValue]);
      toast.success(`${newValue.name} Add Successfully`);
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
    toast.warning(`${newValue.name} update sucessfully!!!`);
  }

  function handelDelete(id) {
    let newData = [...value];
    toast.error(`${newData[id].name} Delete Sucessfully`);

    newData.splice(id, 1);

    setValue(newData);
  }
  return (
    <>
      <section className="section">
        <Card className="section__card">
          <Form className="section__card__form-container">
            <Form.Group
              className="mb-3 section__card__form-container__one"
              controlId="exampleForm.ControlInput1"
            >
              {/* <Form.Label className="section__card__form-container__one__tittle">
                {Stringes.titleInput}
              </Form.Label> */}
              <Label
                className="section__card__form-container__one__tittle"
                names={Stringes.titleInput}
              />
              <Input
                name={"name"}
                value={newValue.name}
                placeholder={"Enter Your Title"}
                onChange={(e) => handleChange(e)}
                className="section__card__form-container__one__tittle-input"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 section__card__form-container__two"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label className="section__card__form-container__two__desc">
                {Stringes.textArea}
              </Form.Label> */}
              <Label
                className="section__card__form-container__two__desc"
                names={Stringes.textArea}
              />
              <TextArea
                name={"description"}
                className="section__card__form-container__two__desc-area"
                value={newValue.description}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <div className="section__card__form-container__btn">
              <Button
                className="section__card__form-container__btn__btn-1"
                variant="outline-success"
                onClick={() => {
                  !update ? handleAdd() : handleUpdate();
                }}
                add={!update ? "add" : "update"}
                type="button"
              />

              <LuRefreshCw
                className="section__card__form-container__btn__refresh"
                onClick={() => handelClearInput()}
              />
            </div>
          </Form>
        </Card>

        <div className="section__Notes">
          {value?.map((item, id) => {
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
          })}
        </div>
      </section>
    </>
  );
}

export default AddNotes;
