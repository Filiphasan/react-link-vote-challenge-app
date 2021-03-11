import React from 'react'
import './Link.css'
const Link = ({ link }) => {
    return (
        <div className="link">
            <div className="link-point">
                <h3>{link.points}</h3>
                <p>POINTS</p>
            </div>
            <div className="link-info">
                <div className="link-text">
                    <h3>{link.name}</h3>
                    <p>({link.url})</p>
                </div>
                <div className="link-vote">
                    <button>&#129137; Up Vote</button>
                    <button>&#129139; Down Vote</button>
                </div>
            </div>
            <button className="highlight-btn" title="Remove">-</button>
        </div>
    )
}

export default Link
