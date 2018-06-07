import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const Header = (props) => (
    <header className='header'>
      <div className='row'>
        <div className='col-1-of-2'>
            <div className='header__left'>
                <div className='header__rate'>
                    <span className='text-primary'>your rate:</span>
                    <span className='text-secondary'>{` 1 BTC = 12.34 ETH`}</span>
                </div>
            </div>
        </div>
        <div className='col-1-of-2'>
            <Navigation />
        </div>
      </div>
    </header>
);

const mapStateToProps = (state) => ({
    lang: state.language
});

export default connect(mapStateToProps)(Header);