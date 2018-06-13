import React from 'react';
import QRCode from 'qrcode.react';
import moment from 'moment';

const TransactionStatus = (props) => (
    <div className='row'>
        <div className='trader-box'>
            <div className='trader-box__content trader-box__content--active'>
                    <div className='col-1-of-2'>
                        <QRCode value={props.deposit} />
                        <p className='text-primary'>Deposit to: {props.deposit}</p>
                        <p className='text-primary'>Deposit amount: {props.depositAmount}</p>
                    </div>
                    <div className='col-1-of-2'>
                    <p className='text-tertiary text-tertiary__highlight'>{moment(props.expiration).format('DD MM HH:MM:SS')}</p>
                    <p className='text-primary'>withdrawal address: {props.withdrawal}</p>
                    <p className='text-primary'>you will receive: {props.withdrawalAmount}</p>
                    <p className='text-tertiary'>your rate: {props.qoutedRate}</p>
                    </div>
            </div>
        </div>
    </div>
);

export default TransactionStatus;