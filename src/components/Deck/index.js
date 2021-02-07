import { useSelector } from 'react-redux';
import Card from 'components/Card';
import AttributeBadge from 'components/AttributeBadge';

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
            <AttributeBadge label={card.height} />
            <AttributeBadge label={card.mass} />
            <AttributeBadge label={card.starships?.length} />
          </>
        );
      }

      case 'starships': {
        return (
          <>
            <h5>{card.name}</h5>
            <AttributeBadge label={card.crew} />
            <AttributeBadge label={card.passengers} />
            {/* TODO: NAN */}
            <AttributeBadge label={card.max_atmosphering_speed} />
          </>
        );
      }

      case 'vehicles': {
        return (
          <>
            <h5>{card.name}</h5>
            <AttributeBadge label={card.crew} />
            <AttributeBadge label={card.passengers} />
            <AttributeBadge label={card.cargo_capacity} />
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
