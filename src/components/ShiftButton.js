import React from 'react';

const ShiftButton = (props) => (
    <div className="row">
        <div className="col-md-12 text-center">
            <button className="btn btn-primary" type="button" >{props.label}</button>
        </div>
    </div>
);

export default ShiftButton;