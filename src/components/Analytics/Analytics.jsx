import React from 'react';
import { observer, inject } from 'mobx-react'

const Analytics = inject("crmStore")(observer((props) => {
    console.log('ANALYTICS LOADING')
    return (
        <div>
            {props.crmStore.popularCountry.country}
        </div>
    )
}))

export default Analytics;