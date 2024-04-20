import './style.scss'

function Button({onClick,add}) {
  return <>
  <button type='button' onClick={onClick} className='button'>
    {add}
  </button>
  </>
}

export default Button;