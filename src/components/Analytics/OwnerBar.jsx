import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { observer, inject } from 'mobx-react'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const OwnerBar = inject("crmStore")(observer((props) => {
    console.log('OWNER BAR LOADING')

    return (
        <ResponsiveBar
            data={props.crmStore.ownerSums}
            keys={['count']}
            indexBy="owner"
            margin={{ top: 50, right: 50, bottom: 50, left: 120 }}
            padding={0.3}
            groupMode="grouped"
            layout="horizontal"
            colors={{ scheme: 'paired' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '# of Clients',
                legendPosition: 'middle',
                legendOffset: 40
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            enableGridY={false}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )
}))
export default OwnerBar