import React from 'react';
import { connect} from 'react-redux';
import SSAPI from '../shapeshift/shapeshift';
import ShiftButton from './ShiftButton';
import InputAddress from './InputAddress';
import {validateInput, validateAmount} from '../validations/shapeshiftValidations';
import {startSetTransaction} from '../actions/transaction';
import TermsBox from './TermsBox';

class CoinsSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            returnAddress: '',
            withdrawAddress: '',
            amount: '',
            validating: false,
            returnIsValid: false,
            withdrawIsValid: false,
            amountIsValid: false,
            agreed: false
        }
    }

    handleReturnChange = (e) => {
        const returnAddress = e.target.value;
        this.setState({returnAddress});
    }

    handleWithdrawChange = (e) => {
        const withdrawAddress = e.target.value;
        this.setState({withdrawAddress});
    }

    handleAmountChange = (e) => {
        const amount = e.target.value;
        this.setState({amount});
    }

    handleTermsAgreement = (e) => {
        const agreed = e.target.checked;
        this.setState({agreed});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        //start validation
        //check if empty inputs
        if(validateInput(this.state.returnAddress, this.state.withdrawAddress) && this.state.agreed) {
            //check if amount is within limits
            if(validateAmount(this.state.amount, this.props.limits.maxLimit, this.props.limits.minimum)) {
                //check if correct address are provided
                this.setState(() => ({
                    validating: true
                }), () => {
                    //check if return address is valid
                    SSAPI.ValidateAdddress(this.state.returnAddress, this.props.returnSymbol, (response) => {
                        this.setState(() => ({
                            returnIsValid: response.isvalid
                        }), () => {
                            //check if withdraw address is valid and end validation
                            SSAPI.ValidateAdddress(this.state.withdrawAddress, this.props.withdrawSymbol, (response) => {
                                this.setState({
                                    withdrawIsValid: response.isvalid,
                                    validating: false
                                }, () => {
                                    //callback after validations finished and states are set
                                    if(this.state.returnIsValid && this.state.withdrawIsValid) {
                                        console.log('start transaction');
                                        this.props.handleStartTransaction();
                                        this.props.startSetTransaction(
                                            this.state.amount,
                                            this.state.withdrawAddress,
                                            this.props.returnSymbol,
                                            this.props.withdrawSymbol
                                        );
                                    } else {
                                        console.log('validation failed!');
                                    }
                                });
                            });
                        })
                    });
                });
            } else {
                alert('your amount is not within trx limit');
            }
        } else {
            alert('please fill neccessary fields!');
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleFormSubmit}>
                <div className="form__group">
                    <div className="row">
                        <div className='col-1-of-2'>
                            <InputAddress 
                                className='input__text'
                                type='text'
                                label={this.props.lang.returnAddress}
                                value={this.state.returnAddress}
                                isvalid={this.state.returnIsValid}
                                onValueChangeHandler={this.handleReturnChange}
                                />
                        </div>
                        <div className='col-1-of-2'>
                            <InputAddress 
                                className='input__text'
                                type='text'
                                label={this.props.lang.withdrawAddress}
                                value={this.state.withdrawAddress}
                                isvalid={this.state.withdrawIsValid}
                                onValueChangeHandler={this.handleWithdrawChange}
                                />
                            <InputAddress 
                                className='input__text'
                                type='text'
                                label={this.props.lang.amount}
                                value={this.state.value}
                                isvalid={this.state.amountIsValid}
                                onValueChangeHandler={this.handleAmountChange}
                                />
                        </div>
                    </div>
                    <div className='row'>
                        <TermsBox 
                          checked={this.state.agreed}
                          onChange={this.handleTermsAgreement}
                        />
                        <ShiftButton 
                        disabled={this.state.validating}
                        loading={this.state.validating}
                        label={this.props.lang.shiftButton}
                        type='submit'
                        />
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    lang: state.language,
    limits: state.limits
});

const mapDispatchToProps = (dispatch) => ({
    startSetTransaction: (amount, withdrawalAddress, coin1, coin2,cb) => {
       return dispatch(startSetTransaction(amount, withdrawalAddress, coin1, coin2,cb));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinsSubmitForm);