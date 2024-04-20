import './style.scss'

function Input({value,onChange,placeholder}) {
  return <>
  <input className='input-box' placeholder={placeholder} value={value} onChange={onChange}/>
  </>
}

export default Input