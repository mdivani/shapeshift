import React from 'react';
import shapeshift from '../shapeshift/shapeshift';
import ExchangeStatusBox from './ExchangeStatusBox';

class ExchangeStatusContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            awaitingDeposit: true,
            awaitingExchange: false,
            isConfirmed: false,
            expired: false
        }
    }

    componentDidMount() {
        shapeshift.GetStatusOfDepositToAddress(this.props.depositAddress, (data) => {
            if(data.status === 'error') {
                this.props.handleStatusError(data.error);
                this.setState({
                    awaitingDeposit: false,
                    expired: true
                });
            }
        })
    }



    render() {
        return (
            <ExchangeStatusBox
            awaitingDeposit={this.state.awaitingDeposit}
            awaitingExchange={this.state.awaitingExchange}
            isConfirmed={this.state.isConfirmed}
            expired={this.state.expired}
           />
        )
    }
}

export default ExchangeStatusContainer;