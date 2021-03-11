import React from 'react'
import Link from '../Link/Link'
import Select from '../Select/Select'
import './List.css'


const List = ({ links, sortAtoZ, sortZtoA, removeLink }) => {
    return (
        <div className="container">
            <div className="list">
                <Select sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
                {
                    links.map(link => {
                        return (
                            <Link key={link.url} link={link} removeLink={removeLink} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List
