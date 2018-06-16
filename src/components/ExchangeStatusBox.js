import React from 'react';

const ExchangeStatusBox = (props) => (
    <div className='exchange'>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-download ${
                    props.awaitingDeposit && !props.expired  ? 'exchange__pending' : props.expired ? 'exchange__expired' :
                    'exchange__confirmed'
                    }`
                }></i>
                <label className='exchange__label'>awaiting deposit</label>
            </div>
        </div>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-exchange-alt ${
                    props.awaitingExchange && !props.expired ? 'exchange__pending' : props.expired ? 'exchange__expired' :
                    props.awaitingDeposit ? '' :'exchange__confirmed'
                }`
            }></i>
                <label className='exchange__label'>waiting for exchange</label>
            </div>
        </div>
        <div className='col-1-of-3'>
            <div className='exchange__icon'>
                <i className={`fas fa-check ${
                    props.isConfirmed && !props.expired ? 'exchange__confirmed' : props.expired ? 'exchange__expired' :
                    ''
                }`
            }></i>
                <label className='exchange__label'>received</label>
            </div>
        </div>
    </div>
);

export default ExchangeStatusBox;