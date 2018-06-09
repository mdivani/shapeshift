import React from 'react';
import { connect } from 'react-redux';
import CoinSelector from './CoinSelector';
import ShiftButton from './ShiftButton';
import { startSetLimits } from '../actions/limits';
import CoinSubmitContainer from './CoinSubmitContainer';
import SwitchArrow from './SwitchArrow';

const CoinTrader = (props) => (
    <div className='trader-box'>
        <div className={'trader-box__content trader-box__content--active'}>
            <h2 className='trader-box__title'>choose which coins to trade</h2>
            <div className='row'>
                <div className='col-1-of-2'>
                <CoinSelector
                label={props.lang.returnAddress}
                direction='in'
                isSelected={props.isDepositSelected}
                coinName={props.returnCoin}
                handleSelectedDirection={props.handleSelectedDirection}
                />
                </div>
                <div className='col-1-of-2'>
                <CoinSelector
                label={props.lang.withdrawAddress}
                direction='out'
                isSelected={!props.isDepositSelected}
                coinName={props.withdrawCoin}
                handleSelectedDirection={props.handleSelectedDirection}
                />
                </div>
            </div>
        </div> 
        <div className='row'>
            <CoinSubmitContainer 
                withdrawSymbol={props.withdrawCoin}
                returnSymbol={props.returnCoin}/>
        </div>
    </div>
);
    

const mapStateToProps = (state) => ({
    lang: state.language
})

export default connect(mapStateToProps)(CoinTrader);