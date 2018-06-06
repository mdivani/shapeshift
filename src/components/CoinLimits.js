import React from 'react';

const CoinLimits = ({limits, depositSymbol = '', withdrawSymbol = ''}) => (
    <div className="limits">
        <div className='row'>
            <div className='col-1-of-3 limits__column'>
               <p className='text-primary'> Deposit Limit:</p>
               <p className='text-secondary'> {`${limits.maxLimit} ${depositSymbol}`} </p>
            </div>
            <div className='col-1-of-3 limits__column'>
                <p className='text-primary'>Minimum Amount:</p>
                <p className='text-secondary'> {`${limits.minimum} ${depositSymbol}`} </p>
            </div>
            <div className='col-1-of-3 limits__column'>
                <p className='text-primary'>Miner Fee:</p>
                <p className='text-secondary'> {`${limits.minerFee} ${withdrawSymbol}`} </p>
            </div>
        </div>
    </div>
);


export default CoinLimits;