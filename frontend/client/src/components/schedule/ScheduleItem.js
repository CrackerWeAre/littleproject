import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleItem = ({ schedule }) => {
    return (
        <>
            <li key={schedule._id} className="schedule_item">
                <Link to={schedule.url}>
                    <img src={schedule.image} alt=""/>
                    
                    <div className="schedule_content">
                        <h1>{schedule.title}</h1>
                        <p>{schedule.description}</p>
                        <span>{`${schedule.year}.${schedule.month}.${schedule.day}`}</span>
                        {schedule.live === true ? (<strong>live</strong>) : ""}
                        {schedule.days.map(day => (<strong className="schedule_days" key={day}>{day}</strong>))}
                    </div>
                </Link>
            </li>
        </>
    );
}

export default ScheduleItem;