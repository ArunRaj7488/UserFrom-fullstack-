import React, { Component, useEffect } from "react";
import { Button, Row, Col } from 'react-bootstrap';
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
                <Row style={{ marginTop: '5px'}}>
                    <Col>
                        <h1>Users</h1>
                    </Col>
                    <Col>               
                        <Button style={{position:'absolute', right:'20px', top:'5px' }} type="primary" href='/user-signup'>Add New User</Button>  
                    </Col>
                </Row>
                <UserTableView  getUserData={this.state.userData} />          
              </div>
        );
    }
}

export default  UserManagement;