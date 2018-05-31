import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import CoinBox from './CoinBox';
import InputAddress from './InputAddress';
import CoinList from '../components/CoinList';
import CoinLimits from './CoinLimits';

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
        console.log(prevProps.coins.length)
        if(prevState.coinName !== this.state.coinName || prevProps.coins.length !== this.props.coins.length) 
        this.setState(() => ({
            coin: this.props.coins.filter((value) => {
                if(value.symbol === this.state.coinName) {
                    return value;
                }
            })[0]
        }));          
    }

    handleOpenModal = () => {
        this.setState((prev) => ({
            openModal: !prev.openModal
        }));
    }

    handleRequestCloseFunc = () => {
        this.setState({openModal: false});
    }

    handleSelectCoin = (coin) => {
        console.log('clicked!', coin.symbol);
        this.setState({
            coinName: coin.symbol
        });
    }

    render() {
        return (
            <div className='col-md-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='btn-group' onClick={this.handleOpenModal}>
                            <CoinBox
                                coin={this.state.coin}
                             />
                            <Modal 
                             isOpen={this.state.openModal}
                             ariaHideApp={false}
                             onRequestClose={this.handleRequestCloseFunc}
                             shouldCloseOnOverlayClick={true}
                             shouldCloseOnEsc={true}
                            >
                             <CoinList
                             handleSelectCoin={this.handleSelectCoin} 
                             />
                            </Modal>
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
    console.log(state.coins);
    return {
        coins: state.coins
    };
}

export default connect(mapStateToProps)(CoinSelector);