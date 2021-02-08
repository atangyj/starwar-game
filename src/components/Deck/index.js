import { useSelector } from 'react-redux';
import CardBack from 'components/Card/CardBack';
import CardFace from 'components/Card/CardFace';

const Deck = ({ cards, selectCard, label, score, selectedCard }) => {
  const competeAttr = useSelector((state) => state.diceOutcome.label);
  const isPhaseStarted = useSelector((state) => state.isPhaseStarted);
  const isStagedResultSaved = useSelector((state) => state.isStagedResultSaved);

  return (
    <div className="d-flex flex-row-reverse justify-content-center">
      <div style={{ maxWidth: '600px' }}>
        <span className="m-2">{label}</span>
        <span style={{ fontSize: '40px' }}>{score}</span>
        <div className="card-deck">
          {cards.map((card, i) => {
            const setVisibility = () => {
              let invisible;
              if (isPhaseStarted) {
                invisible = label === 'COMPUTER';
                if (isStagedResultSaved) {
                  invisible = card.name !== selectedCard.name;
                }
              } else {
                invisible = true;
              }
              return invisible;
            };
            return setVisibility() ? (
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
