import React from 'react';
import { connect } from 'react-redux';
import CoinBox from './CoinBox';
import InputAddress from './InputAddress';
import CoinLimits from './CoinLimits';
import ModalBox from './ModalBox';
import ModalContent from './ModalContent';

class CoinSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: undefined,
            openModal: false,
            coinName: this.props.coinName.toUpperCase() || 'BTC'
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.coinName !== this.state.coinName || prevProps.coins.length !== this.props.coins.length) 
        this.setState(() => ({
            coin: this.props.coins.filter((value) => {
                if(value.symbol === this.state.coinName) {
                    return value;
                }
            })[0]
        }));          
    }

    handleModalToggle = () => {
        this.setState((prev) => ({
            openModal: !prev.openModal
        }));
    }

    handleSelectCoin = (coin) => {
        this.setState({
            coinName: coin.symbol,
            openModal: false
        });
    }

    render() {
        return (
            <div className='col-md-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='btn-group'>
                            <CoinBox
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
                    <div className="col-md-12">
                        <div className="form-group">
                            <InputAddress 
                             className='form-control'
                             type='text'
                             label={this.props.label}
                             />
                            {
                            this.props.direction === 'out' && <InputAddress className='form-control' type='text' label='amount' />
                            }
                        </div>
                        {
                        this.props.direction === 'in' && <CoinLimits  />
                        }
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        coins: state.coins
    };
}

export default connect(mapStateToProps)(CoinSelector);