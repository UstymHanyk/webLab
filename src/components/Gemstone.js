import React from 'react';
import diamondImg from '../images/gemstones/diamond.png';
import sapphireImg from '../images/gemstones/sapphire.png';
import rubyImg from '../images/gemstones/ruby.png';
import emeraldImg from '../images/gemstones/emerald.png';
import amethystImg from '../images/gemstones/amethyst.png';
import { Link, useNavigate } from "react-router-dom";

const Gemstone = ({ id, name, image, price, karats, hardness }) => {
  const gemstoneImages = {
    Diamond: diamondImg,
    Sapphire: sapphireImg,
    Ruby: rubyImg,
    Emerald: emeraldImg,
    Amethyst: amethystImg,
  };

  // const navigate = useNavigate();
  
  // const handleLinkToItem = ()=>{
  //   navigate(`/item/${id}`, { state: { gemstone: { id, image: gemstoneImages[image],name, price, karats, hardness } } });

  // }
  return (
    <div key={id} className="gemstone-item">
      <img src={gemstoneImages[image]} alt={name} />
      <div className="gemstone-item-info">
        <p>{name}</p>
        <p>Price: <span>${price}</span></p>
        <p>Karats: <span>{karats}</span></p>
        <p>Hardness: <span>{hardness}</span></p>
        <Link to={`/item/${id}`} state={{ gemstone: { id, image, name, price, karats, hardness } }} className="view_details">

        {/* <Link onClick={handleLinkToItem} className="view_details"> */}
                View Details
            </Link>
      </div>
    </div>
  );
};

export default Gemstone;
