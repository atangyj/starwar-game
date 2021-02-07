const Card = ({ selectCard, disable, children }) => {
  return (
    <button
      onClick={selectCard}
      disabled={disable}
      className="card"
      style={{ height: '250px' }}
    >
      {children}
    </button>
  );
};

export default Card;
