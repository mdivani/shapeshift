import React from 'react';

const CoinBox = ({coin = { image: "", name: "", symbol: ""}, handleModalToggle}) => {
    return (
        <div 
          onClick={handleModalToggle}
          className='coin-box'>
            <img src={`https://shapeshift.io${coin.image}`} className='coin-box__image' />
            <label className='coin-box__label'>{coin.name}</label>
        </div>
    )
}

export default CoinBox;