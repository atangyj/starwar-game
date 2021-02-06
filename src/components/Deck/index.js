import Card from 'components/Card';

const Deck = ({ cards, selectCard }) => {
  return cards.map((card, i) => (
    <Card card={card} key={i} selectCard={() => selectCard(i)} />
  ));
};

export default Deck;
