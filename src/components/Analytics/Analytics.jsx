import React from 'react';
import { observer, inject } from 'mobx-react'
import Charts from './Charts';
import TopIcons from './TopIcons';

const Analytics = inject("crmStore")(observer((props) => {
    console.log('ANALYTICS LOADING')
    return (
        <>
            <TopIcons/>
            <Charts/>
        </>
    )
}))

export default Analytics;