import React from 'react';
import { observer, inject } from 'mobx-react'

const TopIcons = inject("crmStore")(observer((props) => {
    return (
        <div>
        </div>
    )
}))

export default TopIcons;