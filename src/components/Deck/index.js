import { useSelector } from 'react-redux';
import Card from 'components/Card';
import { render } from '@testing-library/react';

const Deck = ({ cards, selectCard, title }) => {
  const competeAttr = useSelector((state) => state.diceOutcome.label);
  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);
  const renderCardInfo = (card) => {
    switch (competeAttr) {
      case 'people': {
        return (
          <>
            <h5>{card.name}</h5>
            <ul>
              <li>{card.height}</li>
              <li>{card.mass}</li>
              <li>Polited starships {card.starships.length}</li>
            </ul>
          </>
        );
      }

      case 'starships': {
        return (
          <>
            <h5>{card.name}</h5>
            <ul>
              <li>{card.crew}</li>
              <li>{card.passengers}</li>
              <li>{card.max_atmosphering_speed}</li>
            </ul>
          </>
        );
      }

      case 'vehicles': {
        return (
          <>
            <h5>{card.name}</h5>
            <ul>
              <li>{card.crew}</li>
              <li>{card.passengers}</li>
              <li>{card.cargo_capacity}</li>
            </ul>
          </>
        );
      }
    }
  };
  return (
    <div className="mx-auto w-80" style={{ maxWidth: '860px' }}>
      <span>{title}</span>
      <div className="card-deck">
        {cards.map((card, i) => (
          <Card
            key={i}
            selectCard={() => selectCard(i)}
            disable={!isPhaseStarted}
          >
            {renderCardInfo(card)}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Deck;
