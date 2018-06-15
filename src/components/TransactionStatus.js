import React from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';
import CountDownTimer from './CountDownTimer';
import getCoinFromPair from '../utilities/getCoinFromPair';
import ExchangeStatusContainer from './ExchangeStatusContainer';

const TransactionStatus = (props) => (
    <div className='row'>
        <div className=''>
            <div className=''>
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
                                        timestamp={props.expiration}
                                        />
                                    </div>
                                    <p className='tx__txt'>
                                        {`send ${props.depositAmount} ${props.depositCoin.symbol} to:`}
                                    </p>
                                    <p className='tx__txt'>
                                        <img className='tx__icon' src={props.depositCoin.imageSmall} />
                                        <span className='tx__address'>
                                            {props.deposit}
                                        </span>
                                    </p>
                                    <p className='tx__txt'>
                                        {`fixed rate: 1 ${props.depositCoin.symbol} = ${props.qoutedRate} ${props.receiveCoin.symbol}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-1-of-2'>
                          <div className='tx'>
                            <h3 className='tx__title'>transaction details</h3>
                            <p className='tx__txt'>
                              withdrawal address:
                              <span className='tx__address'> {props.withdrawal}</span>
                              <img src={props.depositCoin.imageSmall} className='tx__icon' />
                            </p>
                            <p className='tx__txt'>
                              return address:
                              <span className='tx__address'> {props.returnAddress}</span>
                              <img src={props.receiveCoin.imageSmall} className='tx__icon' />
                            </p>
                            <p className='tx__txt'> 
                              {`you will receive: ${props.withdrawalAmount} ${props.receiveCoin.symbol}`}
                            </p>
                            <p className='tx__txt'>
                              miner fee: <span className='tx__status tx__status--pending'>0.0014</span> {props.receiveCoin.symbol}
                            </p>
                            <p className='tx__txt'>
                              status: <span className='tx__status tx__status--pending'>pending</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-1-of-2'>
                            <ExchangeStatusContainer />
                        </div>
                        <div className='col-1-of-2'>
                            <div className='tx'>
                                <h4 className='tx__title'>transaction history</h4>
                            </div>
                        </div>
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