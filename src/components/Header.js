import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const Header = (props) => (
    <header className='header'>
      <div className='row'>
        <div className='col-1-of-2'>
            <div className='header__left'>
                <div className='header__rate'>
                    <span className='text-primary'>your rate:</span>
                    <span className='text-secondary'>{` 1 ${props.returnCoin} = ${props.rate} ${props.withdrawCoin}`}</span>
                </div>
            </div>
        </div>
        <div className='col-1-of-2'>
            <div className='row'>
                <div className='header__left'>
                    <div className='header__rate'>
                        <span className='text-primary'>
                            please select <span className='text-tertiary'>{props.isDepositSelected ? 'deposit' : 'withdraw'}</span> coin
                        </span>
                    </div>
                    <Navigation />
                </div>
            </div>
        </div>
      </div>
    </header>
);

const mapStateToProps = (state) => ({
    lang: state.language,
    limits: state.limits
});

export default connect(mapStateToProps)(Header);