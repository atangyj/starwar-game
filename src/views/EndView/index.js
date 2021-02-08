import Button from 'components/Button';
import Modal from 'components/Modal';

const EndView = ({ onClick, winner, isOpen }) => (
  <Modal isOpen={isOpen}>
    <div style={{ width: '50%' }} className="mx-auto">
      <h4>{winner} is the winner</h4>
      <p>the peace in galaxy will continue for 1000yrs, unless you...</p>
      <Button label="END PEACE" onClick={onClick} />
    </div>
  </Modal>
);

export default EndView;
