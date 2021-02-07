const Card = ({ selectCard, disable, children, className }) => {
  return (
    <button
      onClick={selectCard}
      disabled={disable}
      style={{ height: '240px', opacity: '1' }}
      className={`card shadow rounded-lg border-secondary ${className} p-2`}
    >
      {children}
    </button>
  );
};

export default Card;
