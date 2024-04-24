import "./style.scss";

function TextArea({ value, onChange, name, label }) {
  return (
    <>
      <div className="text-area-field">
        <label className="text-area-field__tittle">{label}</label>
        <textarea
          className="text-area-field__box"
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </>
  );
}

export default TextArea;
