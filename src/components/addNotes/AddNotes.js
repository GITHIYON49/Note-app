import React, { useState } from "react";
import Notes from "../Notes/Notes";
import { toast } from "react-toastify";
import FormInput from "../FormInput/FormInput";
import { NoRecordFound } from "../index";
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
  const { addMsg, deleteMsg, updateMsg, emptyMsg } = Strings;
  function handleChange(e) {
    const { name, value } = e.target;
    setNewValue((preData) => ({
      ...preData,
      [name]: value,
    }));
  }

  function handleAdd() {
    if (newValue.name === "" || newValue.description === "") {
      toast.error(`${emptyMsg}`);
    } else {
      setValue([...value, newValue]);
      toast.success(`${newValue.name} ${addMsg}`);
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
    toast.warning(`${newValue.name} ${updateMsg}`);
  }

  function handelDelete(id) {
    let newData = [...value];
    toast.error(`${newData[id].name} ${deleteMsg}`);

    newData.splice(id, 1);

    setValue(newData);
  }

  return (
    <>
      <section className="section">
        <div className="section__card">
          <FormInput
            newValue={newValue}
            handleChange={handleChange}
            update={update}
            handleAdd={handleAdd}
            handleUpdate={handleUpdate}
            handelClearInput={handelClearInput}
          />
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
