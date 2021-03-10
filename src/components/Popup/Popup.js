import React from 'react'
import './Popup.css'

const Popup = ({ visible }) => {
    if (visible) {
        return (
            <>
                <div className="popup-bg"></div>
                <div className="popup">
                    <div className="popup-title">
                        <p>Remove Link</p>
                        <button>X</button>
                    </div>
                    <div className="popup-body">
                        <p>Do you want to remove:</p>
                        <h4>REDDIT</h4>
                    </div>
                    <div className="popup-btns">
                        <button>OK</button>
                        <button>CANCEL</button>
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }


}

export default Popup
