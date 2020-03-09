import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import UserTableView from '../componants/user/userTableView';

class UserManagement extends Component {
    render() {
        return(
            <div>
                <h1>Users</h1>
                <Button type="primary" href='/user-signup'>Add New User</Button>  
                <UserTableView />          
              </div>
        );
    }
}

export default  UserManagement;