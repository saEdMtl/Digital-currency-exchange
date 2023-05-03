import React from 'react';

//asssets
import spinner from "../assets/Spinner-1s-200px.gif"

//style
import styles from "./loading.module.css"

const Loading = () => {
    return (
        <div>
            <img src={spinner} alt='Loading' />
            <h3>Loading...</h3>
        </div>
    );
};

export default Loading;