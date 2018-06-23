import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import BackArrow from '../components/BackArrow';

const Header = (props) => (
    <header className='header'>
      <div className='row'>
        <div className='col-1-of-2--md'>
                {
                    props.isTxPage && <BackArrow  
                                            handleAbortTransaction={props.handleAbortTransaction}/>
                }
                <div className='header__rate'>
                    <span className='text-primary'>
                      {props.lang.yourRate}:
                    </span>
                    <span className='text-secondary'>
                        {` 1 ${props.returnCoin} = ${props.rate} ${props.withdrawCoin}`}
                    </span>
                </div>
        </div>
        <div className='col-1-of-2--md'>
            <div className='header__selected'>
                <span className='text-tertiary'>
                    <span className='text-tertiary__highlight'>
                    {
                        props.isDepositSelected ? props.lang.deposit : props.lang.receive
                    }
                    </span>
                </span>
            </div>
            <Navigation />
        </div>
      </div>
    </header>
);

const mapStateToProps = (state) => ({
    lang: state.language,
    limits: state.limits
});

export default connect(mapStateToProps)(Header);