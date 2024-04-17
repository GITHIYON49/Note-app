import React from 'react'
import './style.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function Notes({data,setValue,setName,setDescription,index,value}) {

  function handelEdit(){
    let name = data[1].name;
    let description = data[1].description;

    console.log(setName(name));
    setDescription(description);



  }

  function handelDelete(){
// console.log(index,typeof data)
    
    let newData =[...value];

    newData.splice(index,1);

    setValue(newData);

    console.log(newData);
    

    // newData.splice(index,1);
    // setValue(newData);
  }
  return <>
  <div>
  <Card className='card'>
      <Card.Body className='card__container'>
        <Card.Title className='card__container__tittle'>{data.name}</Card.Title>
        <Card.Text className='card__container__content'>
         {data.description}
        </Card.Text>
        <div className='card__container__btn'>
        <Button className='card__container__btn__one' onClick={()=>handelEdit()}><BiSolidPencil /></Button>
        <Button className='card__container__btn__two' onClick={()=>handelDelete()} ><MdDelete /></Button>
        </div>
      </Card.Body>
    </Card>
    </div>

  </>
}

export default Notes