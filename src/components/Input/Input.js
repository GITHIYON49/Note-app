import './style.scss'

function Input({value,onChange,placeholder,name}) {
  return <>
  <input className='input-box' placeholder={placeholder} name={name} value={value} onChange={onChange}/>
  </>
}

export default Input;