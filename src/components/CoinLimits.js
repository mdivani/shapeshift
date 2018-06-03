import React from 'react';

const CoinLimits = ({limits}) => (
    <div className="">
        <div>Deposit Limit: {limits.maxLimit || ''} </div>
        <div>Minimum Amount: {limits.minimum || ''}</div>
        <div>Miner Fee: {limits.minerFee || ''} </div>
        <div>Rate: {limits.rate || ''} </div>
    </div>
);


export default CoinLimits;