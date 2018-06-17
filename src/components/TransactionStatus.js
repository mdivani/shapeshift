import React from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';
import CountDownTimer from './CountDownTimer';
import getCoinFromPair from '../utilities/getCoinFromPair';
import ExchangeStatusBox from './ExchangeStatusBox';

const TransactionStatus = (props) => (
    <div className='row'>

        <div className='row'>
            <div className='col-1-of-2'>
                <div className='col-1-of-3'> 
                    <div className='qr'>
                        <QRCode 
                            className='qr__code'
                            size={169}
                            value={props.deposit} />
                        <label className='qr__label'>deposit address</label>
                    </div>
                </div>
                <div className='col-2-of-3'>
                    <div className='tx'>
                        <div>
                            <CountDownTimer
                                expired={props.expired}
                                timestamp={props.expiration}
                                handleExpiration={props.handleExpiration}
                                finished={props.finished}
                            />
                        </div>
                        <p className='tx__txt'>
                            send <span className='tx__price'>{props.depositAmount}</span> {props.depositCoin.symbol} to:
                        </p>
                        <p className='tx__txt'>
                            <img className='tx__icon' src={props.depositCoin.imageSmall} />
                            <span className='tx__address'>
                                {props.deposit}
                            </span>
                        </p>
                        <p className='tx__txt'>
                            fixed rate: 
                            <span className='tx__price'> 1</span> {props.depositCoin.symbol} = 
                            <span className='tx__price'> {props.quotedRate}</span> {props.receiveCoin.symbol}
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-1-of-2'>
                <div className='tx'>
                    <h3 className='tx__title'>transaction details</h3>
                    <p className='tx__txt'>
                        receive address:
                        <span className='tx__address'> {props.withdrawal}</span>
                        <img src={props.receiveCoin.imageSmall} className='tx__icon' />
                    </p>
                    <p className='tx__txt'>
                        refund address:
                        <span className='tx__address'> {props.returnAddress}</span>
                        <img src={props.depositCoin.imageSmall} className='tx__icon' />
                    </p>
                    <p className='tx__txt'> 
                        you will receive: <span className='tx__price'>{props.withdrawalAmount}</span> {props.receiveCoin.symbol}
                    </p>
                    <p className='tx__txt'>
                        miner fee: <span className='tx__price'>{props.minerFee}</span> {props.receiveCoin.symbol}
                    </p>
                </div>
            </div>
        </div>
        <hr />

        <div className='row'>
            <div className='col-1-of-2'>
                <ExchangeStatusBox
                    status={props.status}
                    expired={props.expired}
                />
            </div>
            <div className='col-1-of-2'>
                <div className='tx'>
                    <h4 className='tx__title'>transaction status</h4>
                    <p className='tx__txt'>
                        current status: <span className='tx__status tx__status--pending'>{props.status}</span>
                    </p>
                    {
                    props.statusError && <p className='tx__txt'>
                    reason: <span className='tx__status tx__status--error'>{props.statusError}</span>
                    </p>
                    }
                    {
                    props.status === 'complete' &&
                    <div className='tx'>
                        <p className='tx__txt'>transaction was successfully completed</p>
                        <p className='tx__txt'>transaction ID: {props.transactionId}</p>
                    </div>
                    }
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