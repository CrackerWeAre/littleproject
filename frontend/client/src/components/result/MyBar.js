import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MyBar = ({ data /* see data tab */ }) => {

    const item = [{
        "요일": "일",
        "수": 123
      },{
        "요일": "토",
        "수": 156
      },{
        "요일": "금",
        "수": 100
      },{
        "요일": "목",
        "수": 23
      },{
        "요일": "수",
        "수": 243
      },{
        "요일": "화",
        "수": 122
      },{
        "요일": "월",
        "수": 92
      }]
      const MyResponsiveBar = () => (
        <ResponsiveBar
            data={item}
            keys={[ '일', '토', '금', '목', '수', '화', '월' ]}
            indexBy="요일"
            margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
            padding={0.1}
            layout="horizontal"
            colors={{ scheme: 'nivo' }}
            colorBy="index"
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '요일',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )
    return (
        <Fragment>

            <div className="result_bar">
                {MyResponsiveBar()}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBar)

