const Card = ({ card, selectCard }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <button onClick={selectCard}>
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </button>
    </div>
  );
};

export default Card;
