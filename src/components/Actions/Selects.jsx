import React from 'react';
import { observer, inject } from 'mobx-react'

const Actions = inject("crmStore", "inputStore")(observer((props) => {

    let { handleInput} = props.inputStore

    return (
        <div>
            <select name={props.name} id={props.name} onChange={handleInput} value={props.selectValue}>
                <option value="" disabled>{props.placeholder}</option>
                {props.data.map(d => {
                    return <option value={d.id} onChange={handleInput} key={Math.random()}>{d.value}</option>
                })}
            </select>
        </div>
    )
}))

export default Actions;