import React, { useState } from 'react'

import './Block.css'

const Block = ({ title }) => {


    const initialState = {
        id: Date.now(),
        value: ""
    };

    const [items, setItems] = useState([initialState]);

    const handleChange = (id, { target }) => {
        if (items[items.length - 1].id === id && target.value.length) {
            setItems([...items, { id: Date.now(), value: "" }]);
        }
        if (!target.value.length && id !== items.length - 1) {
            setItems(items.filter((item) => item.id !== id));
        }
    };

    return (
        <div>
            <div className='title-block centeredDiv'>{title}</div>
            <div className='body-block'>
                <ol>
                    {items?.map(({ id }) => (
                        <li key={id}>
                            <input onChange={(e) => handleChange(id, e)}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

export default Block;