import AttributeBadge from 'components/AttributeBadge';
import Card from 'components/Card';
import cardImage from 'images';

const CardFace = ({ cardType, card, selectCard }) => {
  const renderCardInfo = (card) => {
    switch (cardType) {
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
    <Card
      selectCard={selectCard}
      className="d-flex flex-column justify-content-between"
    >
      {renderCardInfo(card)}
      <h5 className="align-self-center">{card.name}</h5>
      <img src={cardImage} alt={card.name} style={{ width: '20%' }} />
    </Card>
  );
};

export default CardFace;
