import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import { observer, inject } from 'mobx-react'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CountryPie = inject("crmStore")(observer((props) => {

    return (
        <ResponsivePie
            data={props.crmStore.countrySums}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            sortByValue={true}
            innerRadius={0.5}
            padAngle={4}
            colors={{ scheme: 'blue_purple' }}            
            borderWidth={2}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={2}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={5}
            radialLabelsLinkDiagonalLength={15}
            radialLabelsLinkHorizontalLength={11}
            radialLabelsLinkStrokeWidth={2}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )
}))
export default CountryPie