import { ResponsiveCalendar } from '@nivo/calendar'

import React, { Fragment } from 'react'
import { connect } from 'react-redux'

export const MyCalander = ({ data /* see data tab */ }) => {

    const item = [{
        "day": "2016-12-28",
        "value": 169
      }]
    const MyResponsiveCalendar = () => (
        <ResponsiveCalendar
            data={item}
            from="2015-03-01"
            to="2016-07-12"
            emptyColor="#eeeeee"
            colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left'
                }
            ]}
        />
    )
    return (
        <Fragment>

            <div className="result_line">
                {MyResponsiveCalendar()}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCalander)

