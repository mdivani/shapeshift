import React from 'react';
import { connect } from 'react-redux';

const TermsBox = (props) => (
    <div className='checkbox'>
        <input 
         id='terms' 
         type='checkbox' 
         onChange={props.onChange}
         className='checkbox__check' 
         checked={props.checked} />
        <label htmlFor='terms' className='checkbox__label'>
        {props.lang.terms}
        </label>
    </div>
);

const mapStateToProps = (state) => ({
    lang: state.language
})

export default connect(mapStateToProps)(TermsBox);