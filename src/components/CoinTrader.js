import React from 'react';
import { connect } from 'react-redux';
import CoinSelector from './CoinSelector';
import ShiftButton from './ShiftButton';
import { startSetLimits } from '../actions/limits';
import CoinSubmitForm from './CoinSubmitForm';
import SwitchArrow from './SwitchArrow';

class CoinTrader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            returnCoin: '',
            withdrawCoin: '',
            continue: false
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

    handleContinueClick = () => {
        this.setState({continue: true});
    }
    
    render() {
        return (
            <div className='trader-box'>
                <h2 className='trader-box__title'>choose which coins to trade</h2>
                <div className='row'>
                    <CoinSelector
                    label={this.props.lang.returnAddress}
                    direction='in'
                    coinName={this.state.returnCoin}
                    handleCoinSelection={this.handleCoinSelection}
                    />
                    <SwitchArrow />
                    <CoinSelector
                    label={this.props.lang.withdrawAddress}
                    direction='out'
                    coinName={this.state.withdrawCoin}
                    handleCoinSelection={this.handleCoinSelection}
                    />
                </div>
                <div className='row'>
                    <ShiftButton
                    label={this.props.lang.continue}
                    onClickHandler={this.handleContinueClick}
                    />
                </div>
                {
                    this.state.continue && <CoinSubmitForm 
                                            withdrawSymbol={this.state.withdrawCoin}
                                            returnSymbol={this.state.returnCoin}/>
                }
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