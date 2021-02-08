import './Modal.css';

const Modal = ({ isOpen, children }) => (
  <div className={`Modal ${isOpen ? 'Modal--open' : ''}`}>{children}</div>
);

export default Modal;
