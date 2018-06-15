import React from 'react';
import ExchangeStatusBox from './ExchangeStatusBox';

class ExchangeStatusContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            awaitingDeposit: true,
            isConfirmed: false,
            isPending: false,
            expired: false
        }
    }



    render() {
        return (
            <ExchangeStatusBox
            awaitingDeposit={this.state.awaitingDeposit}
            isPending={this.state.isPending}
            isConfirmed={this.state.isConfirmed}
            expired={this.state.expired}
           />
        )
    }
}

export default ExchangeStatusContainer;