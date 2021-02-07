import React from 'react';

const Buttons = (props) => {
    return (
        <div className="container">
            <button className="btn btn-primary mt-5 mb-5" onClick={props.handleSubmit}>Order by First Name</button>
        </div>
    )
}

export default Buttons;