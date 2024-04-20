import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Notes from "../notes/Notes";
import TextArea from "../TextArea/TextArea";
import { LuRefreshCw } from "react-icons/lu";
import { toast } from "react-toastify";
import "./style.scss";

function AddNotes() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState([]);
  const [update, setUpdate] = useState(false);
  const [newId, setNewId] = useState(null);

  let newData = {
    name,
    description,
  };

  function handleName(event){
    setName(event.target.value)
  }

  function handleDescription(event){
    setDescription(event.target.value)
  }

  function handleAdd(){
    setValue([...value, newData]);
    handelInput();

  }

  function handelInput() {
    if (name === "" || description === "") {
      let data = [...value];
      setValue(data);
    }
    else{
      toast.success(`${newData.name} Add Successfully `);
    }
  
  }

  function handelClearInput() {
    setName("");
    setDescription("");
  }

  function handleEdit(id) {
    setUpdate(true);
    let newData = [...value];
    let data = newData[id];
    setName(data.name);
    setDescription(data.description);
    setNewId(id);
  }

  function handleUpdate() {
    let data = [...value];

    data.splice(newId, 1, newData);
    setValue(data);
    setUpdate(false);
    toast.warning(`${newData.name} update sucessfully!!!`);
  }

  function handelDelete(id){
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
              <Form.Label className="section__card__form-container__one__tittle">
                Title
              </Form.Label>
              <Input value={name}
              placeholder ={'Enter Your Title'}
                onChange={(e) => handleName(e)}
                className="section__card__form-container__one__tittle-input"/>

            </Form.Group>
            <Form.Group
              className="mb-3 section__card__form-container__two"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="section__card__form-container__two__desc">
                Description
              </Form.Label>
              <TextArea 
               className="section__card__form-container__two__desc-area"
               value={description}
               onChange={(e) => handleDescription(e)}
              />
            </Form.Group>
            <div className="section__card__form-container__btn">
                <Button
                  className="section__card__form-container__btn__btn-1"
                  variant="outline-success"
                  onClick={() => { !update ? handleAdd() : handleUpdate() }}
                  add={!update ?'add' : 'update'}
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
                handleDelete ={()=> {
                  handelDelete(id)}
                }
                setName={setName}
                setDescription={setDescription}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AddNotes;
