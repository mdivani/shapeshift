import React from 'react';
import CoinSelector from './CoinSelector';
import ShiftButton from './ShiftButton';

const CoinTrader = (props) => (
    <div className='container margin-top--medium'>
        <div className='row'>
            <CoinSelector
              label='Return Address'
              direction='in'
              coinName='BTC'
             />
            <CoinSelector
              label='Withdrawal Address'
              direction='out'
              coinName='ETH'
             />
        </div>
        <ShiftButton />
    </div>
);

export default CoinTrader;