import React from 'react';
import CoinList from '../components/CoinList';
import InputAddress from './InputAddress';

export default class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: ''
        }
    }

    handleIdentifierChange = (e) => {
        const identifier = e.target.value;
        this.setState(() => ({identifier}));
    }

    render() {
        return (
            <div>
                <InputAddress 
                  value={this.state.identifier}
                  onValueChangeHandler={this.handleIdentifierChange}
                  label='quick search'
                />
                <CoinList 
                 identifier={this.state.identifier}
                 handleSelectCoin={this.props.handleSelectCoin}
                />
            </div>
        )
    }
}