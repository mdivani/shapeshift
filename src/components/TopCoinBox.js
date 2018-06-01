import React from 'react';

const TopCoinBox = (props) => (
    <div>
        <span className=''></span>
        <a href='coincap.io' target='_blank'>
            <p>{props.symbol}</p>
            <p>{props.price}</p>
            <p>{props.percent}</p>
        </a>
    </div>
);

export default TopCoinBox;