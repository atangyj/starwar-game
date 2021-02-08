import { useSelector } from 'react-redux';
import CardBack from 'components/Card/CardBack';
import CardFace from 'components/Card/CardFace';
import AttributeBadge from 'components/AttributeBadge';

const Deck = ({ cards, selectCard, label, invisible }) => {
  const competeAttr = useSelector((state) => state.diceOutcome.label);
  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);

  return (
    <div className="d-flex flex-row-reverse justify-content-center">
      <div style={{ maxWidth: '600px' }}>
        <h4>{label}</h4>
        <div className="card-deck">
          {cards.map((card, i) => {
            return invisible ? (
              <CardBack key={i} />
            ) : (
              <CardFace
                key={i}
                selectCard={() => selectCard(i)}
                cardType={competeAttr}
                card={card}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Deck;
