import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';


const SwitchArrow = (props) => (
    <div className='col-1-of-5'>
        <div className='icon' onClick={props.handleSwitchClick}>
            <i className='fas fa-exchange-alt icon__exchange'></i>
        </div>
    </div>
);

export default SwitchArrow;