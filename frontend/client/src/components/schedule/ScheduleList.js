import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchScheduleList } from '../../actions/schedule';
import ScheduleItem from './ScheduleItem';

const ScheduleList = (props) => {
    useEffect(() => {
        props.fetchScheduleList();
    }, []);

    return (
        <>
            <div className="schedule_container">
                <ul className="schedule_list">
                    {props.schedules.map(schedule => (
                        <ScheduleItem key={schedule._id} schedule={schedule} />
                    ))}
                </ul>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        schedules: Object.values(state.schedules)
    };
}

export default connect(mapStateToProps, { fetchScheduleList })(ScheduleList);