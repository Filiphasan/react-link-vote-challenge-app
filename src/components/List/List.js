import React from 'react'
import Link from '../Link/Link'
import Select from '../Select/Select'
import './List.css'


const List = ({ links, sortAtoZ, sortZtoA, removeLinkClickHandler }) => {
    return (
        <div className="container">
            <div className="list">
                <Select sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} />
                {
                    links.map(link => {
                        return (
                            <div key={link.url} onClick={removeLinkClickHandler(link)}>
                                <Link link={link} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List
