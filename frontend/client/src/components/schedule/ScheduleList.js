import React from 'react';
import { Link } from 'react-router-dom';
import FakeData from './FakeData';

const ScheduleList = () => {
    return (
        <>
            <div className="schedule_container">
                <ul className="schedule_list">
                    {FakeData.map(data => (
                        <li key={data._id} className="schedule_item">
                            
                            <Link to={data.url}>
                                <img src={data.image} alt=""/>
                                
                                <div className="schedule_content">
                                    <h1>{data.title}</h1>
                                    <p>{data.subtitle}</p>
                                    <span>{data.date}</span>
                                    {data.live === true ? (<strong>live</strong>) : ""}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ScheduleList;