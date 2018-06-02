import React from 'react';
import { connect } from 'react-redux';
import CoinSelector from './CoinSelector';
import ShiftButton from './ShiftButton';
import { startSetLimits } from '../actions/limits';

class CoinTrader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            returnCoin: '',
            withdrawCoin: ''
        }
    }

    componentDidMount() {
        this.setState(() => ({
            returnCoin: localStorage.getItem('return') || 'BTC',
            withdrawCoin: localStorage.getItem('withdraw') || 'ETH'
        }), () => {
            this.props.startSetLimits(this.state.returnCoin, this.state.withdrawCoin);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.returnCoin !== this.state.returnCoin || prevState.withdrawCoin !== this.state.withdrawCoin) {
            localStorage.setItem('return', this.state.returnCoin);
            localStorage.setItem('withdraw', this.state.withdrawCoin);
        }
    }

    handleCoinSelection = (symbol, direction) => {
        if(direction === 'in') {
            if(this.state.withdrawCoin !== symbol) {
                this.setState({
                    returnCoin: symbol
                });
            } else {
                this.setState((prevState) => ({
                    withdrawCoin: prevState.returnCoin
                }), () => this.setState({returnCoin: symbol}));
            }
        } 
        else if(direction === 'out') {
            if(this.state.returnCoin !== symbol) {
                this.setState({
                    withdrawCoin: symbol
                });
            } else {
                this.setState((prevState) => {
                    return ({
                    returnCoin: prevState.withdrawCoin
                })}, () => {
                    this.setState({withdrawCoin: symbol});
                });
            }
        }
    }
    
    render() {
        return (
            <div className='container margin-top--medium'>
                <div className='row'>
                    <CoinSelector
                    label={this.props.lang.returnAddress}
                    direction='in'
                    coinName={this.state.returnCoin}
                    handleCoinSelection={this.handleCoinSelection}
                    />
                    <CoinSelector
                    label={this.props.lang.withdrawAddress}
                    direction='out'
                    coinName={this.state.withdrawCoin}
                    handleCoinSelection={this.handleCoinSelection}
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