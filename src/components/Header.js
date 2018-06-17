import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const Header = (props) => (
    <header className='header'>
    { !props.startTransaction &&
      <div className='row'>
        <div className='col-1-of-2'>
            <div className='header__left'>
                <div className='header__rate'>
                    <span className='text-primary'>
                      your rate:
                    </span>
                    <span className='text-secondary'>
                        {` 1 ${props.returnCoin} = ${props.rate} ${props.withdrawCoin}`}
                    </span>
                </div>
            </div>
        </div>
        <div className='col-1-of-2'>
            <div className='row'>
                <div className='header__left'>
                    <div className='header__rate'>
                        <span className='text-tertiary'>
                            please select <span className='text-tertiary__highlight'>{props.isDepositSelected ? 'deposit' : 'withdraw'}</span> coin
                        </span>
                    </div>
                    <Navigation />
                </div>
            </div>
        </div>
      </div>
    }
    {
      props.startTransaction && 
      <div className='row'>
            <div className='header__left'>
                <span className='icon' onClick={props.handleAbortTransaction}>
                    <i className='fas fa-angle-left icon__arr-back'></i>
                </span>
                <div className='header__rate'>
                    {
                    props.orderId && 
                    <span className='text-tertiary'> 
                        <span className='text-primary'>Order ID</span> = {props.orderId} 
                    </span>
                    }
                </div>
                <Navigation />
            </div>
        </div> 
    }
    </header>
);

const mapStateToProps = (state) => ({
    lang: state.language,
    limits: state.limits,
    orderId: state.transaction.success ? state.transaction.success.orderId : undefined
});

export default connect(mapStateToProps)(Header);