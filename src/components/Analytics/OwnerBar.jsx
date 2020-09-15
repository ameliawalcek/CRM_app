import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { observer, inject } from 'mobx-react'

const OwnerBar = inject("crmStore")(observer((props) => {
    return (
        <ResponsiveBar
            data={props.crmStore.ownerSums}
            keys={['count']}
            indexBy="owner"
            margin={{ top: 50, right: 50, bottom: 50, left: 120 }}
            padding={0.3}
            groupMode="grouped"
            colorBy='index'
            colors={{ scheme: 'green_blue' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', '0.5' ] ] }}            axisTop={null}
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
                legend: 'Number of Clients',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            axisBottom={{
                tickSize: 7,
                tickPadding: 5,
                tickRotation: 20,
                legendPosition: 'middle',
                legendOffset: 32
            }}
            enableGridY={true}
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