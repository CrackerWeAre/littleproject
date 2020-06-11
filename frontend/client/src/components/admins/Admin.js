import React, { Component } from 'react';
import AdminList from './AdminList'
import "../../style/css/AdminList.css"

class Admin extends Component {
    render() {
        return (
            <div className="adminList">
                <AdminList></AdminList>
            </div>
        );
    }
}

export default Admin;