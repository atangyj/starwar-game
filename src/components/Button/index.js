const Button = ({ onClick, label }) => (
  <button className="btn btn-dark btn-large" type="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
