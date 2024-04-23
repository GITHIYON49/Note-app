import './style.scss'

function TextArea({value,onChange,name}) {
  return <>
  <textarea className='text-area-box' name={name} value={value} onChange={onChange} ></textarea>
  </>
}

export default TextArea;