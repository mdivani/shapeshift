import React from 'react';

const ShiftButton = (props) => (
    <div className="input-group">
            <input 
              defaultValue={props.label}
              onClick={props.onClickHandler}
              className="btn btn--primary margin-top--small" 
              type={props.type || "button"} />
    </div>
);

export default ShiftButton;