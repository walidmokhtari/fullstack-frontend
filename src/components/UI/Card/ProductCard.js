import React from "react";
import styles from "./Product.module.scss";
import Input from "../Input/Input"

const ProductCard = (props) => {
    return (
        <div className={styles.product__card} key={props.id}>
            ID : {props.id}<br></br>
            Name : {props.title} <br></br>
            Price : {props.price} <br></br>
            <button className="favorite styled" type="button">
                Add to card
            </button>
        </div>
    );
  };
  
  export default ProductCard;