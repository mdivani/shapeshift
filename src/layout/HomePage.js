import React from 'react';
import {connect} from 'react-redux';
import CoinTrader from '../components/CoinTrader';
import { startSetTopCoins } from '../actions/topCoins';
import { setLanguage } from '../actions/language';
import TopCoinList from '../components/TopCoinList';
import Header from '../components/Header';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.startSetTopCoins();
    }

    render() {
        return (
            <div>
                <Header />
                <CoinTrader 
                />
                <TopCoinList />
            </div>
        );
    }
} 

const mapStateToProps = (state) => ({
    coins: state.coins
});

const mapDispatchToProps = (dispatch) => ({
    startSetTopCoins: () => dispatch(startSetTopCoins()),
    setLanguage: (option) => dispatch(setLanguage(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);