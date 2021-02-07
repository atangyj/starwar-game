import { useSelector } from 'react-redux';
import CardBack from 'components/Card/CardBack';
import CardFace from 'components/Card/CardFace';
import AttributeBadge from 'components/AttributeBadge';

const Deck = ({ cards, selectCard, title, invisible }) => {
  const competeAttr = useSelector((state) => state.diceOutcome.label);
  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);
  const selectedCardSet = useSelector((state) => state.selectedCardSet);

  const renderCardInfo = (card) => {
    switch (competeAttr) {
      case 'people': {
        return (
          <AttributeBadge
            label="piloted starships "
            value={card.starships?.length}
          />
        );
      }

      case 'starships': {
        return (
          <AttributeBadge
            label="max speed "
            value={card.max_atmosphering_speed}
          />
        );
      }

      case 'vehicles': {
        return <AttributeBadge label="capacity " value={card.cargo_capacity} />;
      }
    }
  };
  return (
    <div className="mx-auto w-80" style={{ maxWidth: '600px' }}>
      <span>{title}</span>
      <div className="card-deck">
        {cards.map((card, i) => {
          return invisible ? (
            <CardBack key={i} />
          ) : (
            <CardFace
              key={i}
              selectCard={() => selectCard(i)}
              disable={!isPhaseStarted}
              cardType={competeAttr}
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
