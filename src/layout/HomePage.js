import React from 'react';
import {connect} from 'react-redux';
import CoinTrader from '../components/CoinTrader';
import { startSetTopCoins } from '../actions/topCoins';


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
                <h1>Home Page</h1>
                <CoinTrader 
                />
            </div>
        );
    }
} 

const mapStateToProps = (state) => ({
    coins: state.coins
});

const mapDispatchToProps = (dispatch) => ({
    startSetTopCoins: () => dispatch(startSetTopCoins())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);