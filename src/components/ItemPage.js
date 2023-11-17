import React,{ useState } from "react";
import {useParams} from "react-router-dom";
import "../styles/ItemPage.css";
import { gemstonesData } from './gemstonesData';
import Gemstone from "./Gemstone"
import GradientAnimatedBackdrop from "./GradientAnimatedBackdrop";
import Select from "./Select";
import Input from "./Input";
import ActionButton from "./ActionButton";
const Item = () => {
    const { id } = useParams();
    const itemId = parseInt(id);
    const gemstone = gemstonesData.find((gemstone) => gemstone.id === itemId);

    const [filters, setFilters] = useState({
        quantity: 1,
        shipping: "Nova Poshta"
      });

    const shippingOptions = ["Nova Poshta", "Amazon Delivery", "Uber"];

    return (
        <div className="item__wrapper">
        <GradientAnimatedBackdrop></GradientAnimatedBackdrop>
    
        <div className="item__container">
        <div className="item__image">
            <img src={gemstone.image}></img>
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
        
        <Select label="Shipping" value={filters.shipping} onChange={setFilters} options={shippingOptions} />

        <Input label="Quantity" value={filters.quantity} onChange={setFilters} placeholder=""></Input>
        
        </div>
        
        <div className="buttons__wrapper">
        
        <ActionButton text="Go back" linkHref="/catalog"></ActionButton>
        <ActionButton text="Add to cart" linkHref="/cart"></ActionButton>
        
        </div>
              </div>
   
        </div>            

        </div>
        </div>
    );
};

export default Item;