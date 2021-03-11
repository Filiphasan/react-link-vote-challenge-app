import React, { useState, useEffect } from 'react'
import './Select.css'

const Select = ({ sortAtoZ, sortZtoA }) => {
    const [value, setValue] = useState();
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
        if (value == 0) {
            sortZtoA();
        }
        else if (value == 1) {
            sortAtoZ();
        }
    }, [value])
    return (
        <div className="select-order">
            <select value={value} onChange={onChangeHandler} >
                <option value="-1" disabled selected>Order by</option>
                <option value="0">Most Voted (Z → A)</option>
                <option value="1">Most Voted (A → Z)</option>
            </select>
            <p>▼</p>
        </div>
    )
}

export default Select
