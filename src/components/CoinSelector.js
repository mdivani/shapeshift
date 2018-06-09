import React from 'react';
import { connect } from 'react-redux';
import CoinBox from './CoinBox';

class CoinSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: undefined,
            coinName: '',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.coinName !== this.props.coinName || prevProps.coins.length !== this.props.coins.length) 
        this.setState(() => ({coinName: this.props.coinName}), () => {
            this.setState(() => ({
                coin: this.props.coins.filter((value) => {
                    if(value.symbol === this.state.coinName) {
                        return value;
                    }
                })[0]
            }));
        });          
    }

    handleBoxClick = () => {
        const isDeposit = this.props.direction === 'in';
        this.props.handleSelectedDirection(isDeposit);
    }

    render() {
        return (
                <div 
                  onClick={this.handleBoxClick} 
                >
                    <CoinBox
                        isSelected={this.props.isSelected}
                        direction={this.props.direction}
                        coin={this.state.coin}
                        />
                </div>
        )
    }
};

const mapStateToProps = (state) => ({
    lang: state.language,
    coins: state.coins
})


export default connect(mapStateToProps)(CoinSelector);