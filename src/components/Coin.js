import React from 'react';

//style
import styles from "./coin.module.css"

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt='coin' />
            <h3>{name}</h3>
            <h4>{symbol.toUpperCase()}</h4>
            <h5>$ {price.toLocaleString()}</h5>
            <p className={priceChange > 0 ? styles.mosbat : styles.manfi}>% {priceChange}</p>
            <h6>{marketCap.toLocaleString()}</h6>
        </div>
    );
};

export default Coin;