import Card from 'components/Card';

const Deck = ({ cards, onClick }) => {
  return cards.map((card, i) => <Card card={card} key={i} />);
};

export default Deck;
