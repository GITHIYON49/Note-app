import "./style.scss";

function Button({ onClick, add, type }) {
  return (
    <>
      <button type={type} onClick={onClick} className="button">
        {add}
      </button>
    </>
  );
}

export default Button;
