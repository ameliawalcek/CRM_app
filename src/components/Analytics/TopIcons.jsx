import React from 'react';
import { observer, inject } from 'mobx-react'

const TopIcons = inject("crmStore")(observer((props) => {
    console.log('TOPICONS LOADING')
    return (
        <div>
        </div>
    )
}))

export default TopIcons;