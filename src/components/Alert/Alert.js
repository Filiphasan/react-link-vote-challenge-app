import React from 'react'
import './Alert.css'

const Alert = ({ visible }) => {
    if (visible) {
        return (
            <div className="alert-box">
                <b>REDDIT</b> removed.
            </div>
        )
    } else {
        return null;
    }
}

export default Alert
