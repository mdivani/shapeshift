import React from 'react';

const DropDown = (props) => (
    <div>
        <select onChange={props.handleChange}>
            <option 
              value='en' 
              selected={props.defaultLanguage === 'en'} >EN</option>
            <option 
              value='jp'
              selected={props.defaultLanguage === 'jp'} >JP</option>
        </select>
    </div>
);

export default DropDown;