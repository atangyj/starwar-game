import { useSelector } from 'react-redux';
import Card from 'components/Card';
import AttributeBadge from 'components/AttributeBadge';
import cardImage from 'images';

const Deck = ({ cards, selectCard, title }) => {
  const competeAttr = useSelector((state) => state.diceOutcome.label);
  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);

  const renderCardInfo = (card) => {
    switch (competeAttr) {
      case 'people': {
        return (
          <AttributeBadge
            label={`piloted starships ${card.starships?.length}`}
          />
        );
      }

      case 'starships': {
        return (
          <AttributeBadge label={`max speed ${card.max_atmosphering_speed}`} />
        );
      }

      case 'vehicles': {
        return <AttributeBadge label={`capacity ${card.cargo_capacity}`} />;
      }
    }
  };
  return (
    <div className="mx-auto w-80" style={{ maxWidth: '600px' }}>
      <span>{title}</span>
      <div className="card-deck">
        {cards.map((card, i) => (
          <Card
            key={i}
            selectCard={() => selectCard(i)}
            disable={!isPhaseStarted}
            className="d-flex flex-column justify-content-between"
          >
            {renderCardInfo(card)}
            <h5 className="align-self-center">{card.name}</h5>
            <img src={cardImage} alt={card.name} style={{ width: '20%' }} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Deck;
