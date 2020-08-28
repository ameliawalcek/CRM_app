import React from 'react';
import { observer, inject } from 'mobx-react'

const Actions = inject("crmStore", "inputStore")(observer((props) => {

    let { handleInput } = props.inputStore

    return (
        <div>
            <input name={props.name} onChange={handleInput} type={props.type}
                id={props.name} placeholder={props.placeholder} required />
        </div>
    )
}))

export default Actions;