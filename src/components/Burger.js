import Modal from 'react-modal';
import { HiOutlineXCircle } from 'react-icons/hi';
import { FaSquareTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { MdAccountCircle } from 'react-icons/md';

function MyModal({ isOpen, onRequestClose }) {
  const MyModalMb = isOpen ? 'modal open' : 'modal';

  return (
    <div className={MyModalMb}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="My Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <HiOutlineXCircle onClick={onRequestClose} className="close-btn-mb" />
          <ul className="content-modal-text">
            <li className="text-modal-mb">
              <a href="index.html">Про нас</a>
            </li>
            <li className="text-modal-mb">
              <a href="index.html">Контакты</a>
            </li>
            <li className="text-modal-mb">
              <a href="index.html">Кабинет</a>
            </li>
          </ul>
          <div className="social-icons">
            <MdAccountCircle />
            <FaSquareTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default MyModal;
