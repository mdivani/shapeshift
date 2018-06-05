import React from 'react';
import { connect } from 'react-redux';
import CoinBox from './CoinBox';
import ModalBox from './ModalBox';
import ModalContent from './ModalContent';

class CoinSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: undefined,
            openModal: false,
            coinName: ''
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

    handleModalToggle = () => {
        this.setState((prev) => ({
            openModal: !prev.openModal
        }));
    }

    handleSelectCoin = (coin) => {
        this.props.handleCoinSelection(coin.symbol, this.props.direction);
        this.setState({
            openModal: false
        });
    }

    render() {
        return (
            <div className='col-2-of-5'>
                <div className='btn-group'>
                    <CoinBox
                        direction={this.props.direction}
                        handleModalToggle={this.handleModalToggle}
                        coin={this.state.coin}
                        />
                    <ModalBox 
                        isOpen={this.state.openModal}
                        ariaHideApp={false}
                    >
                        <ModalContent
                            handleSelectCoin={this.handleSelectCoin} 
                        />
                    </ModalBox>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    lang: state.language,
    coins: state.coins
})


export default connect(mapStateToProps)(CoinSelector);