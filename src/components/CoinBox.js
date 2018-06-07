import React from 'react';

const CoinBox = ({coin = { image: "", name: "", symbol: ""}, direction, handleModalToggle}) => {
    return (
        <div 
          onClick={handleModalToggle}
          className='coin-box'>
            {direction && <p className='coin-box__label'> {direction === 'in' ? 'deposit' : 'recieve' } </p>}
            <img src={`${coin.image}`} className='coin-box__image' />
            <label className='coin-box__label'>{coin.name}</label>
        </div>
    )
}

export default CoinBox;