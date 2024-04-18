import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Notes from '../notes/Notes';
import './style.scss'

function AddNotes() {
  const [name,setName] = useState('');
  const[description,setDescription] = useState('');
  const[value,setValue] = useState([]);
  const[update,setUpdate] = useState(false);
  console.log(value);
  function handleNotes(){
    let newData = {
      name,
      description
    }

    let data = [...value];

    data.push(newData); 
    setValue(data);
    setName('');
    setDescription('');

  }

  function handleUpdate(){
    let newData = {name,description};
    let data = [...value,newData];

    // data.splice(1,1,newData)
    setValue(data);
    setUpdate(false);
    setName('');
    setDescription('');

  }
  return <>
  <section className='section'>
  <Card className='section__card'>
   <Form className='section__card__form-container'>
      <Form.Group className="mb-3 section__card__form-container__one" controlId="exampleForm.ControlInput1">
        <Form.Label className='section__card__form-container__one__tittle'>Tittle</Form.Label>
        <Form.Control className='section__card__form-container__one__tittle-input' value={name}  onChange={(e)=>setName(e.target.value)}  type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 section__card__form-container__two" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='section__card__form-container__two__desc'>Description</Form.Label>
        <Form.Control className='section__card__form-container__two__desc-area' value={description}  onChange={(e)=>setDescription(e.target.value)} as="textarea" />

      </Form.Group>
      {
        !update ? <Button className='section__card__form-container__btn' variant="outline-success" onClick={()=>handleNotes()} type='button'>Add</Button> :
        <Button className='section__card__form-container__btn' variant="outline-success" onClick={()=>handleUpdate()} type='button'>update</Button>
      }
    </Form>
    </Card>

<div className='section__Notes'>
{
  value.map((item,id)=>{
    return <Notes data={item} value={value} key={id} index={id} setValue={setValue} setUpdate={setUpdate} setName={setName} setDescription={setDescription} />
  })
}
</div>
</section>

  </>
}

export default AddNotes