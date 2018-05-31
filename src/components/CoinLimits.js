import React from 'react';
import { connect } from 'react-redux';

const CoinLimits = (props) => (
    <div className="">
        <div>Deposit Limit: {props.limits.maxLimit || ''} </div>
        <div>Minimum Amount: {props.limits.minimum || ''}</div>
        <div>Miner Fee: {props.limits.minerFee || ''} </div>
        <div>Rate: {props.limits.rate || ''} </div>
    </div>
);

const mapStateToProps = (state) => ({
    limits: state.limits
});

export default connect(mapStateToProps)(CoinLimits);