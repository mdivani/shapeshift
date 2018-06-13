import React from 'react';
import { connect } from 'react-redux';
import TransactionStatus from './TransactionStatus';
import Loading from './Loading';

class TransactionContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                this.props.transaction.success ? 
                <TransactionStatus 
                    orderId={this.props.transaction.success.orderId}
                    pair={this.props.transaction.success.pair}
                    withdrawal={this.props.transaction.success.withdrawal}
                    withdrawalAmount={this.props.transaction.success.withdrawalAmount}
                    deposit={this.props.transaction.success.deposit}
                    depositAmount={this.props.transaction.success.depositAmount}
                    expiration={this.props.transaction.success.expiration}
                    qoutedRate={this.props.transaction.success.qoutedRate}
                    maxLimit={this.props.transaction.success.maxLimit}
                    minerFee={this.props.transaction.success.minerFee}
                /> : 
                <Loading />
        )
    }
}

const mapStateToProps = (state) => ({
    transaction: state.transaction
})

export default connect(mapStateToProps)(TransactionContainer);

