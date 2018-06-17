import React from 'react';

const ExchangeStatusBox = (props) => (
    <div className='exchange'>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-download ${
                    props.status === 'pending'  ? 
                    'exchange__pending' : props.status === 'failed' || props.status === 'expired' ? 
                    'exchange__expired' : 'exchange__confirmed'
                    }`
                }>
                </i>
                <label className='exchange__label'>awaiting deposit</label>
            </div>
        </div>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-exchange-alt ${
                    props.status === 'pending' ? 
                    '' : props.status === 'received' ? 
                    'exchange__pending' : props.status === 'complete' ? 
                    'exchange__confirmed' : 'exchange__expired'
                    }`
                }>
                </i>
                <label className='exchange__label'>waiting for exchange</label>
            </div>
        </div>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-check ${
                    props.status === 'pending' || props.status === 'received' ? 
                    '' : props.status === 'complete' ? 'exchange__confirmed' :
                    'exchange__expired'
                    }`
                }>
                </i>
                <label className='exchange__label'>received</label>
            </div>
        </div>
    </div>
);

export default ExchangeStatusBox;