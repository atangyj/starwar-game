const Card = ({ card, selectCard, disable }) => {
  return (
    <button
      onClick={selectCard}
      disabled={disable}
      className="card"
      style={{ height: '250px' }}
    >
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </button>
  );
};

export default Card;
