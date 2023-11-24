import React,{ useState } from "react";
import { useParams, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import "../styles/ItemPage.css";
import { gemstonesData } from './gemstonesData';
import Gemstone from "./Gemstone"
import GradientAnimatedBackdrop from "./GradientAnimatedBackdrop";
import Select from "./Select";
import Input from "./Input";
import ActionButton from "./ActionButton";
import { useDispatch } from 'react-redux';
import {addToCart} from "../redux/actions";

import diamondImg from '../images/gemstones/diamond.png';
import sapphireImg from '../images/gemstones/sapphire.png';
import rubyImg from '../images/gemstones/ruby.png';
import emeraldImg from '../images/gemstones/emerald.png';
import amethystImg from '../images/gemstones/amethyst.png';

const Item = () => {
    const dispatch = useDispatch();
    const gemstoneImages = {
      Diamond: diamondImg,
      Sapphire: sapphireImg,
      Ruby: rubyImg,
      Emerald: emeraldImg,
      Amethyst: amethystImg,
    };
  

    const location = useLocation();
    const gemstone = location.state.gemstone;
    // const  state  = useLocation();
    // const gemstone = state && state.gemstone;
    console.log(gemstone)
    const [filters, setFilters] = useState({
        quantity: 1,
        certificateType: "IMFB"
      });

    const certificateTypeOptions = ["IMFB", "VCA", "CRA"];
    const handleAddToCart = () => {
        dispatch(addToCart(gemstone, filters.quantity, filters.certificateType));
      };
    return (
      
        <div className="item__wrapper">
        <GradientAnimatedBackdrop></GradientAnimatedBackdrop>
    
        <div className="item__container">
        <div className="item__image">
            <img src={gemstoneImages[gemstone.image]}></img>
        </div>            
        <div className="item__info">

                            <h2>
              <span className="underline-purple">{gemstone.name}</span>
            </h2> 
            <div className="item__info__holder">
        <p>Price: <span>${gemstone.price}</span></p>
        <p>Karats: <span>{gemstone.karats}</span></p>
        <p>Hardness: <span>{gemstone.hardness}</span></p>
        
        <div className="buttons__wrapper">
        
        <Select label="Certificate type" name="certificateType" value={filters.certificateType} onChange={setFilters} options={certificateTypeOptions} />

        <Input label="Quantity" value={filters.quantity} onChange={setFilters} placeholder=""></Input>
        
        </div>
        
        <div className="buttons__wrapper">
        
        <ActionButton text="Go back" linkHref="/catalog"></ActionButton>
        <ActionButton text="Add to cart" onClick={handleAddToCart} linkHref="/cart"></ActionButton>
        
        </div>
              </div>
   
        </div>            

        </div>
        </div>
    );
};

export default Item;