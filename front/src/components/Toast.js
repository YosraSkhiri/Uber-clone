import React from 'react';

const Toast = ({ message }) => {
    return(
        <div className="toast" style={ { 
            backgroundColor: '#ff7f50'
        } } >
            { message }
        </div>
    )
}

export default Toast;