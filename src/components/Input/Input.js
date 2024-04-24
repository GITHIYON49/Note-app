import "./style.scss";

function Input({ value, onChange, placeholder, name, label }) {
  return (
    <>
      <div className="input-field">
        <label className="input-field__tittle">{label}</label>
        <input
          className="input-field__box"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Input;
