import React, { useEffect, useState } from 'react';

//api
import { getCoin } from '../services/api';

//components
import Loading from './Loading';
import Coin from "./Coin"

//style
import styles from "./landing.module.css"

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data);
        }

        fetchAPI();

    }, [])

    const searchHandler = e => {
        setSearch(e.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className={styles.container}>
            <input placeholder='Search' type='text' value={search} onChange={searchHandler} />
            {
                coins.length ?
                    <div className={styles.items}>
                        {
                            searchedCoins.map(coin => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                            />)}
                    </div>
                    : <Loading />
            }
        </div>
    );
};

export default Landing;