import React from 'react';
import { observer, inject } from 'mobx-react'
import OwnerBar from './OwnerBar'
import CountryPie from './CountryPie'

const Charts = inject("crmStore")(observer((props) => {
    console.log('CHARTS LOADING')

    return (
        <div>
        <div style={{height: 400}}>
            <CountryPie/>
        </div>
        <div style={{height: 300}}>
            <OwnerBar/>
        </div>
        </div>
    )
}))

export default Charts;