import React from 'react';
import {connect} from 'react-redux';
import DropDown from './DropDown';
import {setLanguage} from '../actions/language';

class LanguageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'jp'
        }
    }

    componentDidMount() {
        this.props.setLanguage(this.state.selectedOption);
    }

    handleLanguageChange = (e) => {
        const option = e.target.value;
        if(option === 'en' || option === 'jp') {
            this.props.setLanguage(option);
        }
    }

    render() {
        return (
            <div>
                <DropDown
                  handleChange={this.handleLanguageChange}
                  selectedOption={this.state.selectedOption}
                 />
            </div>
        )
    }
} 

const mapDispatchToProps = (dispatch) => ({
    setLanguage: (option) => dispatch(setLanguage(option))
});

export default connect(undefined, mapDispatchToProps)(LanguageBox);