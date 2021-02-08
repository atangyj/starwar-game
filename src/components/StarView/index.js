import Button from 'components/Button';
import Modal from 'components/Modal';

const StartView = ({ onClick, isOpen }) => (
  <Modal isOpen={isOpen}>
    <div style={{ width: '50%' }} className="mx-auto">
      <p>
        the war between bright and dark is about to begin.
        <br /> the start of the is determined by a dice. <br />
        the end is determined by the card you play. <br />
        more powerful your card is, <br />
        more power you will lose.
      </p>
      <Button label="START WAR" onClick={onClick} />
    </div>
  </Modal>
);

export default StartView;
