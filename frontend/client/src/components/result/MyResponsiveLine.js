import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { ResponsiveLine , Line} from '@nivo/line'

export const MyResponsiveLine = ({ data /* see data tab */ }) => {

    const item = [
        {
          "id": "japan",
          "color": "hsl(299, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 194
            },
            {
              "x": "helicopter",
              "y": 264
            },
            {
              "x": "boat",
              "y": 75
            },
            {
              "x": "train",
              "y": 30
            },
            {
              "x": "subway",
              "y": 109
            },
            {
              "x": "bus",
              "y": 166
            },
            {
              "x": "car",
              "y": 168
            },
            {
              "x": "moto",
              "y": 25
            },
            {
              "x": "bicycle",
              "y": 57
            },
            {
              "x": "horse",
              "y": 50
            },
            {
              "x": "skateboard",
              "y": 242
            },
            {
              "x": "others",
              "y": 246
            }
          ]
        }
      ]
      const MyResponsiveLine = () => (
        <ResponsiveLine
            data={item}
            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
        />
    )
    return (
        <Fragment>

            <div className="result_line">
                {MyResponsiveLine()}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyResponsiveLine)
