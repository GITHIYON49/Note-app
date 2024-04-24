import "./style.scss";

<<<<<<< HEAD
function Button({onClick,add,type}) {
  return <>
  <button type={type} onClick={onClick} className='button'>
    {add}
  </button>
  </>
=======
function Button({ onClick, add, type }) {
  return (
    <>
      <button type={type} onClick={onClick} className="button">
        {add}
      </button>
    </>
  );
>>>>>>> f0b2d7427fbc801a1fdc4b95c429ff080340e036
}

export default Button;
