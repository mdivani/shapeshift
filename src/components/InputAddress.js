import React from 'react';

const InputAddress = (props) => {
    return (
        <div className='input-group'>
        <input 
            type={props.type}
            className={props.className}
            placeholder={props.label}
            value={props.value}
            onChange={props.onValueChangeHandler}
            />
        <label className='input-group__label'>{props.label}</label>
        </div>
    );
};

export default InputAddress;