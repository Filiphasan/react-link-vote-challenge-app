import React from 'react'
import Select from '../Select/Select'
import './List.css'

const List = () => {
    return (
        <div className="container">
            <div className="list">
                <Select />
                <div className="link">
                    <div className="link-point">
                        <h3>6</h3>
                        <p>POINTS</p>
                    </div>
                    <div className="link-info">
                        <div className="link-text">
                            <h3>Hacker News</h3>
                            <p>(https://news.ycombinator.com/)</p>
                        </div>
                        <div className="link-vote">
                            <button>&#129137; Up Vote</button>
                            <button>&#129139; Down Vote</button>
                        </div>
                    </div>
                    <button className="highlight-btn" title="Remove">-</button>
                </div>
            </div>
        </div>
    )
}

export default List
