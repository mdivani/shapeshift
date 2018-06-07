import React from 'react';
import {connect} from 'react-redux';
import CoinTrader from '../components/CoinTrader';
import { startSetTopCoins } from '../actions/topCoins';
import { setLanguage } from '../actions/language';
import TopCoinList from '../components/TopCoinList';
import Header from '../components/Header';
import ModalContent from '../components/ModalContent';
import CoinLimits from '../components/CoinLimits';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => {
          this.props.startSetTopCoins();
          console.log('top coins updated');
        }, 10000)
    }

    handleSelectCoin = (coin) => {
            //TODO: 
            //implement coins selection from here
        console.log('selected', coin);
    }

    render() {
        return (
            <div className='container'>
              <Header />
              <div className='row'>
                    <div className='col-1-of-2'>
                        <CoinLimits 
                        depositSymbol='BTC'
                        withdrawSymbol='ETH'
                        limits={this.props.limits}
                        />
                        <CoinTrader />
                    </div>
                    <div className='col-1-of-2'>
                        <ModalContent
                            handleSelectCoin={this.handleSelectCoin}
                         />
                    </div>
              </div>
            </div>
        );
    }
} 

const mapStateToProps = (state) => ({
    coins: state.coins,
    limits: state.limits
});

const mapDispatchToProps = (dispatch) => ({
    startSetTopCoins: () => dispatch(startSetTopCoins()),
    setLanguage: (option) => dispatch(setLanguage(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);