import React from 'react';
import QRCode from 'qrcode.react';
import moment from 'moment';

const TransactionStatus = (props) => (
    <div className='row'>
        <div className='trader-box'>
            <div className='trader-box__content trader-box__content--active'>
                    <div className='row'>
                        <div className='coin-box coin-box--qrcode'> 
                        <QRCode value={props.deposit} />
                        <label className='coin-box__label'>deposit address</label>
                        </div>
                        <p className='text-primary'>Deposit to: {props.deposit}</p>
                        <p className='text-primary'>Deposit amount: {props.depositAmount}</p>
                        <p className='text-tertiary text-tertiary__highlight'>{moment(props.expiration).format('DD MM HH:MM:SS')}</p>
                    </div>
                    <div className='row'>
                    <p className='text-primary'>withdrawal address: {props.withdrawal}</p>
                    <p className='text-primary'>you will receive: {props.withdrawalAmount}</p>
                    <p className='text-primary'>your rate: {props.qoutedRate}</p>
                    <p className='text-primary'>return address: {props.returnAddress}</p>
                    </div>
            </div>
        </div>
    </div>
);

export default TransactionStatus;