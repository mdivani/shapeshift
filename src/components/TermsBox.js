import React from 'react';

const TermsBox = (props) => (
    <div className='checkbox'>
        <input id='terms' type='checkbox' className='checkbox__check' />
        <label htmlFor='terms' className='checkbox__label'>
        I agree to the <a href='#'>Terms</a> and certify that I am the beneficial owner of the input assets and the destination address.
        </label>
    </div>
);

export default TermsBox;