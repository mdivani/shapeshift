import React from 'react';
import InputAddress from './InputAddress';
import { connect } from 'react-redux';

const CoinSelector = (props) => {
    const coins = [];
    for(let key in props.coins) {
        if(props.coins.hasOwnProperty(key)) {
            coins.push(props.coins[key]);
        }
    }
    return (
        <div className='col-md-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='btn-group'>
                        <button type="button" className="btn btn-primary">
                            {props.coinName} <span className="caret"></span>
                        </button>
                        <ul className="modal-box">
                        { 
                            coins.map((coin) => {
                                if(coin.status === 'available') {
                                    return <li key={coin.symbol}> {coin.symbol} </li>
                                }
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <InputAddress 
                         className='form-control'
                         type='text'
                         label={props.label}
                         />
                        {
                        props.direction === 'out' && <InputAddress className='form-control' type='text' label='amount' />
                        }
                    </div>
                    {
                    props.direction === 'in' &&
                    <div className="">
                        <div>Deposit Limit: 4.900$ </div>
                        <div>Minimum Amount: 15</div>
                        <div>MinerFee: 0.001</div>
                        <div>Rate: 00 </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    coins: state.coins
});

export default connect(mapStateToProps)(CoinSelector);