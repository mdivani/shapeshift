import React from 'react';
import { connect } from 'react-redux';
import CoinSelector from './CoinSelector';
import ShiftButton from './ShiftButton';
import { startSetLimits } from '../actions/limits';

class CoinTrader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            returnCoin: 'btc',
            withdrawCoin: 'eth'
        }
    }

    componentDidMount() {
        this.props.startSetLimits(this.state.returnCoin, this.state.withdrawCoin);
    }
    
    render() {
        return (
            <div className='container margin-top--medium'>
                <div className='row'>
                    <CoinSelector
                    label={this.props.lang.returnAddress}
                    direction='in'
                    coinName={this.state.returnCoin}
                    />
                    <CoinSelector
                    label={this.props.lang.withdrawAddress}
                    direction='out'
                    coinName={this.state.withdrawCoin}
                    />
                </div>
                <ShiftButton
                  label={this.props.lang.continue}
                />
            </div>
        );
    }
} 

const mapStateToProps = (state) => ({
    lang: state.language
})

const mapDispatchToProps = (dispatch) => ({
    startSetLimits: (coin1, coin2) => dispatch(startSetLimits(coin1, coin2))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinTrader);