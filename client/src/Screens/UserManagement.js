import React, { Component, useEffect } from "react";
import { Button } from 'react-bootstrap';
import UserTableView from '../componants/user/userTableView';
import UserServices from '../services/user';

class UserManagement extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: []
        };
    };
     
   async componentDidMount() {
    	 const user = await UserServices.getUser();
        this.setState({ userData: user.data.result})
    };

    render() {
        return(
            <div>
                <h1>Users</h1>
                <Button type="primary" href='/user-signup'>Add New User</Button>  
                {console.log("asdfgfdsdfg",this.state.userData)}
                <UserTableView  getUserData={this.state.userData} />          
              </div>
        );
    }
}

export default  UserManagement;