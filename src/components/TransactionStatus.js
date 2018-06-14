import React from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';
import CountDownTimer from './CountDownTimer';
import getCoinFromPair from '../utilities/getCoinFromPair';

const TransactionStatus = (props) => (
    <div className='row'>
        <div className='trader-box'>
            <div className='trader-box__content trader-box__content--active'>
                    <div className='row'>
                        <div className='col-1-of-3'>
                            <div className='coin-box coin-box--qrcode'> 
                                <QRCode 
                                    size={156}
                                    value={props.deposit} />
                                <label className='coin-box__label'>deposit address</label>
                            </div>
                        </div>
                        <div className='col-1-of-3'>
                            <div className='tx'>
                                <p className='tx__txt'>
                                {`send ${props.depositAmount} ${props.depositCoin.symbol} to:`}
                                </p>
                                <p className='tx__txt'><span className='tx_address'>{props.deposit}</span></p>
                                <p className='tx__txt'>
                                {`fixed rate: 1 ${props.depositCoin.symbol} = ${props.qoutedRate} ${props.receiveCoin.symbol}`}
                                </p>
                            </div>
                        </div>
                        <div className='col-1-of-3'>
                                <CountDownTimer
                                    timestamp={props.expiration}
                                />
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <p className='text-primary'>withdrawal address: {props.withdrawal}</p>
                        <p className='text-primary'>you will receive: {props.withdrawalAmount}</p>
                        <p className='text-primary'>return address: {props.returnAddress}</p>
                    </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state, props) => ({
    depositCoin: getCoinFromPair(props.pair, state.coins, true),
    receiveCoin: getCoinFromPair(props.pair, state.coins, false)
})

export default connect(mapStateToProps)(TransactionStatus);