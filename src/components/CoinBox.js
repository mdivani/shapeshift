import React from 'react';
import { connect } from 'react-redux';
import TopCoinBox from './TopCoinBox';

const CoinBox = ({coin = { image: "", name: "", symbol: ""}, 
                 topCoins = [],
                 direction, 
                 handleBoxClick, 
                 isSelected}) => {
    
    return (
        <div 
          onClick={handleBoxClick}
          className={`coin-box ${!direction && 'coin-box--small'} ${isSelected && 'coin-box--active'}`}>
            {direction && <p className='coin-box__label'> {direction === 'in' ? 'deposit' : 'recieve' } </p>}
            <img 
                src={`${coin.image}`} 
                className={direction ? 'coin-box__image' : 'coin-box__image--small'} />
            {
                direction ? 
                <label className='coin-box__label'>{coin.name }</label> 
                : topCoins.length > 0 && topCoins.map((topCoin) => {
                    if(topCoin.short === coin.symbol) {
                        return <TopCoinBox
                                    key={topCoin.short}
                                    symbol={topCoin.short}
                                    price={topCoin.price}
                                    percent={topCoin.perc}
                                />
                    }
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    coins: state.coins,
    topCoins: state.topCoins
});

export default connect(mapStateToProps)(CoinBox);