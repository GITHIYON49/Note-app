import './style.scss'

function TextArea({value,onChange}) {
  return <>
  <textarea className='text-area-box' value={value} onChange={onChange} ></textarea>
  </>
}

export default TextArea