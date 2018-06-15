import React from 'react';

const ExchangeStatusBox = (props) => (
    <div className='exchange'>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-arrow-down ${'exchange__pending'}`}></i>
                <label className='exchange__label'>awaiting deposit</label>
            </div>
        </div>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-exchange-alt ${'exchange__pending'}`}></i>
                <label className='exchange__label'>waiting for exchange</label>
            </div>
        </div>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-check ${'exchange__pending'}`}></i>
                <label className='exchange__label'>received</label>
            </div>
        </div>
    </div>
)

export default ExchangeStatusBox;