import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchStreamers } from '../../../actions/admin'
import '../../../style/css/AdminList.css'

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreamers();
    }

    renderAdmin(streamer){

            return (
                <Fragment>
                    <td className="td edit"><Link className="button" to={`/admin/edit/${streamer._id}`}>EDIT</Link></td>
                    <td className="td delete"><Link className="button" to={`/admin/delete/${streamer._id}`}>DELETE</Link></td>
                </Fragment>
            )

    }

    renderCreate(){
        return(
            <div className="admin-header">
                <Link to="/admin/new" className="button create" >
                    <button className="create">Create</button>
                </Link>
            </div>
        )
    }
    renderList(){
        return this.props.streamers.map(streamer=>{
            return(
                <tr className="tr" key={streamer._id}>  
                    <td className="td">{streamer.platform} </td>
                    <td className="td">{streamer.channel}   </td>
                    <td className="td">{streamer.channelID}</td>
                    {this.renderAdmin(streamer)}
                </tr>
            )
        })
    }
    render(){
        return (
            <div>
                {this.renderCreate()}
                <table className="table">
                    <thead className="thead">
                        <tr className="tr">
                            <th className="th">플랫폼</th>
                            <th className="th">채널명</th>
                            <th className="th">채널아이디</th>
                            <th className="th">수정</th>
                            <th className="th">삭제</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {this.renderList()}
                    </tbody>
                </table>
                
            </div>
            
        )
    }

}

const mapStateToProps = state =>{

    
    return {
        streamers: Object.values(state.streamers.data)
    }
}
export default connect(mapStateToProps, { fetchStreamers })(StreamList);