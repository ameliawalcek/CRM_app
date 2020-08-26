import React from 'react';
import { observer, inject } from 'mobx-react'

const Analytics = inject("crmStore")(observer((props) => {

    return (
        <div>
            Analytics
        </div>
    )
}))

export default Analytics;