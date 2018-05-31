import React from 'react';
import {connect} from 'react-redux';
import CoinTrader from '../components/CoinTrader';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('coins', this.props.coins);
    }

    componentDidUpdate() {
        console.log('coins updated', this.props.coins);
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

export default connect(mapStateToProps)(HomePage);