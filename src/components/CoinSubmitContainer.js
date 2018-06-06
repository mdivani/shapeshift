import React from 'react';
import { connect } from 'react-redux';
import CoinSubmitForm from './CoinSubmitForm';
import CoinLimits from './CoinLimits';

const CoinSubmitContainer = (props) => (
    <section>
        <div className='trader-box__header'>
            <span className='icon' onClick={props.handleBackClick}>
            <i className='fas fa-angle-left icon__arr-back'></i>
            </span>
            <div className='trader-box__rate'>
                <span className='text-primary'>your rate:</span>
                <span className='text-secondary'>{` 1 ${props.returnSymbol} = ${props.limits.rate} ${props.withdrawSymbol}`}</span>
            </div>
            <CoinLimits 
                 limits={props.limits}
            />
        </div>
        <div className='trader-box__form'>
        <CoinSubmitForm
                withdrawSymbol={props.withdrawSymbol}
                returnSymbol={props.returnSymbol}/>
        </div>
    </section>
);

const mapStateToProps = (state) => ({
    limits: state.limits
}) 

export default connect(mapStateToProps)(CoinSubmitContainer);