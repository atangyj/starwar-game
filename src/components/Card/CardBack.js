import Card from 'components/Card';
import cardImage from 'images';

const CardBack = () => (
  <Card className="d-flex flex-column justify-content-center">
    <img src={cardImage} alt="card back" style={{ width: '100%' }} />
  </Card>
);

export default CardBack;
