import Card from 'components/Card';

const Deck = ({ cards, selectCard, disableSelect }) => {
  return cards.map((card, i) => (
    <Card
      card={card}
      key={i}
      selectCard={() => selectCard(i)}
      disable={disableSelect}
    />
  ));
};

export default Deck;
