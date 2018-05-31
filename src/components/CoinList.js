import React from 'react';
import { connect } from 'react-redux';
import CoinBox from './CoinBox';

const CoinList = (props) => (
    <div className='coin-list'>
        {
            props.coins && props.coins.map((coin) => {
                if(coin.status === 'available') {
                    return <div key={coin.symbol} 
                             onClick={() => props.handleSelectCoin(coin)}
                             className='coin-list__box'>
                                <CoinBox 
                                coin={coin}
                                />
                           </div>
                }
            })
        }
    </div>
);

const mapStateToProps = (state) => ({
    coins: state.coins
});

export default connect(mapStateToProps)(CoinList);