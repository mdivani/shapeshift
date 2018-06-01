import React from 'react';
import { connect } from 'react-redux';
import TopCoinBox from './TopCoinBox';

const TopCoinList = (props) => (
    <div className='row'>
        {
            props.topCoins.map((coin) => {
                return <TopCoinBox
                          symbol={coin.short}
                          price={coin.price}
                          percent={coin.perc}
                       />
            })
        }
    </div>
);

const mapStateToProps = (state) => ({
    topCoins: state.topCoins
});

export default connect(mapStateToProps)(TopCoinList);