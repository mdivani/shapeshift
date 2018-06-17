import React from 'react';
import { connect } from 'react-redux';
import shapeshift from '../shapeshift/shapeshift';
import TransactionStatus from './TransactionStatus';
import Loading from './Loading';

class TransactionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'pending',
            statusError: '',
            expired: false,
            transactionId: '',
            loaded: false,
            finished: false
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() { 
        if(this.props.transaction.success && !this.state.loaded) {
            this.setState({loaded: true}, () => {
                const stopId = setInterval(() => {
                    if(this.state.status === 'expired') {
                        clearInterval(stopId);
                    } else {
                        shapeshift.GetStatusOfDepositToAddress(this.props.transaction.success.deposit, (data) => {
                            this.handleStatusChange(data);
                            if(this.state.status === 'complete') {
                                clearInterval(stopId);
                            }
                        });
                    }
                //    this.state.status === 'pending' ? 
                //    this.handleStatusChange({status: 'received'}) : 
                //    this.handleStatusChange({status: 'complete'});
                }, 5000);
            });
        } 
    }

    handleExpiration = () => {
        this.setState({
            expired: true,
            status: 'expired'
        });
    }

    handleStatusChange = (data) => {
        switch(data.status) {
            case 'received':
                this.setState(() => ({
                    status: 'received'
                }));
                break ;
            case 'complete':
                this.setState(() => ({
                    status: 'complete',
                    finished: true,
                    transactionId: data.transaction
                }));
                break
            case 'failed':
                this.setState(() => ({
                    expired: true,
                    status: 'failed',
                    statusError: data.error
                }));
                break;
            default: 
                this.setState({
                    status: 'pending'
                });
                break;
        }
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
                    quotedRate={this.props.transaction.success.quotedRate}
                    maxLimit={this.props.transaction.success.maxLimit}
                    minerFee={this.props.transaction.success.minerFee}
                    returnAddress={this.props.transaction.success.returnAddress}
                    recentTx={this.state.recentTx}
                    status={this.state.status}
                    expired={this.state.expired}
                    handleExpiration={this.handleExpiration}
                    finished={this.state.finished}
                    transactionId={this.state.transactionId}
                /> : 
                <Loading />
        )
    }
}

const mapStateToProps = (state) => ({
    transaction: state.transaction
})

export default connect(mapStateToProps)(TransactionContainer);

