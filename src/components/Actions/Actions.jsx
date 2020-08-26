import React from 'react';
import { observer, inject } from 'mobx-react'

const Actions = inject("crmStore")(observer((props) => {

    return (
        <div>
            actions
        </div>
    )
}))

export default Actions;