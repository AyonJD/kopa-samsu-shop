import React from 'react';
import './Navbar.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im'

//Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Navbar = ({ gunArr }) => {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  //Modal open function
  function openModal() {
    setIsOpen(true);
  }
  // Modal close function
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='navbar'>

      {/* Modal body-----------------> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <ImCross className='cross' onClick={closeModal}></ImCross>
        {
          gunArr.length === 0 &&(
            <div className='cart-warning'>
              <p> Cart is empty </p>
            </div>
          )
        }
        {
          gunArr.map(gun => (
            <div className='modal-details'>
              <div className="image">
                <img src={gun.img} alt="" />
              </div>
              <div className="content">
                <h3>{gun.name}</h3>
                <p>Bullet Type : {gun.bullet}</p>
                <p>Capacity : {gun.capacity}</p>
                <p>Action : {gun.action}</p>
              </div>
            </div>
          ))
        }
      </Modal>

      <h1>Kopa Samsu Store</h1>
      <div className="cart-counter" onClick={openModal}>
        <span>{ gunArr.length }</span>
        <BsFillCartPlusFill></BsFillCartPlusFill>
      </div>
    </div>
  );
};

export default Navbar;