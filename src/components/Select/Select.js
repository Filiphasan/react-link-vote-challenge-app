import React from 'react'
import './Select.css'

const Select = () => {
    return (
        <div className="select-order">
            <select id="">
                <option value="-1" defaultValue disabled>Order by</option>
                <option value="0">Most Voted (Z → A)</option>
                <option value="1">Most Voted (A → Z)</option>
            </select>
            <p>▼</p>
        </div>
    )
}

export default Select
