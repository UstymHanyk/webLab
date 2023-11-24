import React, { useState, useEffect } from 'react';
import diamondImg from '../images/gemstones/diamond.png';
import sapphireImg from '../images/gemstones/sapphire.png';
import rubyImg from '../images/gemstones/ruby.png';
import emeraldImg from '../images/gemstones/emerald.png';
import amethystImg from '../images/gemstones/amethyst.png';
import { Link, useNavigate } from 'react-router-dom';

const CartItem = ({
  id,
  name,
  image,
  price,
  karats,
  hardness,
  certificateType,
  quantity,
  handleRemoveFromCart,
  handleQuantityChange,
}) => {
  const [editedQuantity, setEditedQuantity] = useState(quantity);
  const [totalItemPrice, setTotalItemPrice] = useState(price * quantity);
  const gemstoneImages = {
    Diamond: diamondImg,
    Sapphire: sapphireImg,
    Ruby: rubyImg,
    Emerald: emeraldImg,
    Amethyst: amethystImg,
  };


  useEffect(() => {
    // Update totalItemPrice when editedQuantity or price changes
    setTotalItemPrice(price * editedQuantity);
  }, [price, editedQuantity]);

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setEditedQuantity(newQuantity);
    handleQuantityChange(id, newQuantity);
  };

  return (
    <div key={id} className="gemstone-item">
      <img src={gemstoneImages[image]} alt={name} />
      <div className="gemstone-item-info">
        <p>{name}</p>
        <p>
          Price: <span>${price}</span>
        </p>
        <p>
          Karats: <span>{karats}</span>
        </p>
        <p>
          Hardness: <span>{hardness}</span>
        </p>
        <p>
          Certificate Type: <span>{certificateType}</span>
        </p>
      
        <p>
            <br></br>
          Quantity:{' '}
        </p>
          
          <input className='search-input'
            type="number"
            min="1"
            value={editedQuantity}
            onChange={handleInputChange}
          />
        <p>
            <strong>
          Total Item Price: <span>${totalItemPrice.toFixed(2)}</span>
          </strong>
        </p>
        
        <button className="view_details" onClick={() => handleRemoveFromCart(id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
