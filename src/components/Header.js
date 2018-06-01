import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const Header = (props) => (
    <header>
        <div>
            <h1>{props.lang.greeting}</h1>
        </div>
        <div>
            <Navigation />
        </div>
    </header>
);

const mapStateToProps = (state) => ({
    lang: state.language
});

export default connect(mapStateToProps)(Header);