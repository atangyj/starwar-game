import Card from 'components/Card';

const Deck = ({ cards, selectCard, disableSelect, title }) => {
  return (
    <div className="mx-auto" style={{ width: '80%' }}>
      <span>{title}</span>
      <div className="card-deck">
        {cards.map((card, i) => (
          <Card
            card={card}
            key={i}
            selectCard={() => selectCard(i)}
            disable={disableSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Deck;
