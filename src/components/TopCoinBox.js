import React from 'react';

const TopCoinBox = (props) => (
    <ul className='coin-info'>
        <li><label className='coin-info__item'>{props.symbol}</label></li>
        <li><label className='coin-info__item'>{Math.floor(props.cap)} $ </label></li>
        <li><label className='coin-info__item'>{props.price} $ </label></li>
        <li>
            <label className={`coin-info__item ${props.percent > 0 ? 'coin-info__item--positive' : 'coin-info__item--negative'}`}>
              {props.percent}%
            </label>
        </li>
    </ul>
);

export default TopCoinBox;