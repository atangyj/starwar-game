import Card from 'components/Card';

const Deck = ({ cards, selectCard, disableSelect, title, className }) => {
  return (
    <div className={className || ''}>
      <span>{title}</span>
      <div className="d-flex flex-row justify-content-center">
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
