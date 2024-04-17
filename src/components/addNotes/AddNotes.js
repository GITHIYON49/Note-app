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
  console.log(value);
  function handleNotes(){
    let newData = {
      name,
      description
    }

    let data = [...value];

    data.push(newData); 
    setValue(data);

  }
  return <>
  <section className='section'>
  <Card className='section__card'>
   <Form className='section__card__form-container'>
      <Form.Group className="mb-3 section__card__form-container__one" controlId="exampleForm.ControlInput1">
        <Form.Label className='section__card__form-container__one__tittle'>Tittle</Form.Label>
        <Form.Control className='section__card__form-container__one__tittle-input'  onChange={(e)=>setName(e.target.value)}  type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 section__card__form-container__two" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='section__card__form-container__two__desc'>Description</Form.Label>
        <Form.Control className='section__card__form-container__two__desc-area'  onChange={(e)=>setDescription(e.target.value)} as="textarea" />

      </Form.Group>
      <Button className='section__card__form-container__btn' variant="outline-success" onClick={()=>handleNotes()} type='button'>Add</Button>
    </Form>
    </Card>

<div className='section__Notes'>
{
  value.map((item,id)=>{
    return <Notes data={item} value={value} key={id} index={id} setValue={setValue} setName={setName} setDescription={setDescription} />
  })
}
</div>
</section>

  </>
}

export default AddNotes