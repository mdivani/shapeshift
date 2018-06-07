import React from 'react';
import { connect } from 'react-redux';
import CoinSelector from './CoinSelector';
import ShiftButton from './ShiftButton';
import { startSetLimits } from '../actions/limits';
import CoinSubmitContainer from './CoinSubmitContainer';
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
            this.props.startSetLimits(this.state.returnCoin, this.state.withdrawCoin);
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

    handleSwitchClick = () => {
        this.setState((prev) => ({
            returnCoin: prev.withdrawCoin,
            withdrawCoin: prev.returnCoin
        }));
    }

    handleContinueClick = () => {
        this.setState((prev) => ({continue: !prev.continue}));
    }
    
    render() {
        return (
            <div className='trader-box'>
                <div className={'trader-box__content trader-box__content--active'}>
                    <h2 className='trader-box__title'>choose which coins to trade</h2>
                    <div className='row'>
                        <div className='col-1-of-2'>
                        <CoinSelector
                        label={this.props.lang.returnAddress}
                        direction='in'
                        coinName={this.state.returnCoin}
                        handleCoinSelection={this.handleCoinSelection}
                        />
                        </div>
                        <div className='col-1-of-2'>
                        <CoinSelector
                        label={this.props.lang.withdrawAddress}
                        direction='out'
                        coinName={this.state.withdrawCoin}
                        handleCoinSelection={this.handleCoinSelection}
                        />
                        </div>
                    </div>
                </div> 
                <div className='row'>
                    <CoinSubmitContainer 
                        handleBackClick={this.handleContinueClick}
                        withdrawSymbol={this.state.withdrawCoin}
                        returnSymbol={this.state.returnCoin}/>
                </div>
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