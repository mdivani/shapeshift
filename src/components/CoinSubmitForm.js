import React from 'react';

class CoinsSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            returnAddress: '',
            withdrawAddress: '',
            amount: ''
        }
    }

    render() {
        return (
            <form>
                <div className="col-md-12">
                    <div className="form-group">
                        <InputAddress 
                            className='form-control'
                            type='text'
                            label={this.props.label}
                            />
                        {
                        this.props.direction === 'out' && <InputAddress 
                                                            className='form-control' 
                                                            type='text' 
                                                            label={this.props.lang.amount} />
                        }
                    </div>
                    {
                    this.props.direction === 'in' && <CoinLimits  />
                    }
                </div>
            </form>
        )
    }
}