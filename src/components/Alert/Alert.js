import React from 'react'
import './Alert.css'

const Alert = ({ alert }) => {
    if (alert.visible) {
        return (
            <div className="alert-box">
                <b>{alert.msg}</b> removed.
            </div>
        )
    } else {
        return null;
    }
}

export default Alert
