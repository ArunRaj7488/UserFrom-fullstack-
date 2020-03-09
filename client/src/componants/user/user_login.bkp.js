import React, { Component } from "react";
import "../styleCss/userLogin.css";

import UserServices from '../../src/services/user'
import { Button, Form, Row, Col } from 'react-bootstrap';
 
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            gender: ''
        };
    };

    handleChange = (e) => {
        if(e.currentTarget.name === 'userName') this.setState({ userName: e.currentTarget.value });
        if(e.currentTarget.name === 'password') this.setState({ password: e.currentTarget.value });
        if(e.currentTarget.name === 'firstName') this.setState({ firstName: e.currentTarget.value });
        if(e.currentTarget.name === 'lastName') this.setState({ lastName: e.currentTarget.value});
        if(e.currentTarget.name === 'email') this.setState({ email: e.currentTarget.value })
        if(e.currentTarget.name === 'phoneNumber') this.setState({ phoneNumber: e.currentTarget.value});
        if(e.currentTarget.name === 'address') this.setState({ address: e.currentTarget.value});
        
    };

     onSubmit = () => {
          const data = { userName: this.state.userName,
                         password: this.state.password,
                         firstName: this.state.firstName,
                         lastName: this.state.lastName,
                         email: this.state.email,
                         phoneNumber: this.state.phoneNumber,
                         address: this.state.address,
                         Gender: this.state.gender  
                      };
        console.log(data);
        
    };

    render () {
        return (
          <div className="divTag m-2">
            <Form>
              <Form.Group as={Row} controlId="formHorizontalText1">
                <Form.Label column sm={2}>
                  User Name:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" name="userName" placeholder="Enter User name" 
                  onChange={(e) => this.handleChange(e)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalText2">
                <Form.Label column sm={2}>
                  First Name:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" name="firstName" placeholder="Enter First Name" 
                  onChange={(e) => this.handleChange(e)}
                  />
                </Col>
              </Form.Group>
              
              <Form.Group as={Row} controlId="formHorizontalText3">
                <Form.Label column sm={2}>
                  Last Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" name="lastName" placeholder="Enter Last Name"
                  onChange={(e) => this.handleChange(e)}
                   />
                </Col>
              </Form.Group>
              
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" name="email" placeholder=" Enter Email" 
                  onChange={(e) => this.handleChange(e)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalText4">
                <Form.Label column sm={2}>
                  Phone Number
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="Number" name="phoneNumber" placeholder=" Enter Phone Number"
                  onChange={(e) => this.handleChange(e)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalText5">
                <Form.Label column sm={2}>
                Address
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="textt" name="address" placeholder=" Enter Your Address"
                  onChange={(e) => this.handleChange(e)} />
                </Col>
              </Form.Group>



              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" name="password" placeholder="Password" 
                  onChange={(e) => this.handleChange(e)}/>
                </Col>
              </Form.Group>

              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={2}>
                    Gender
                  </Form.Label>

                  <Row sm={10} className="m-2" >
                    <Form.Check
                      type="radio"
                      label="male"
                      id="male"
                      name="male"
                      />
                    <Form.Check
                      className="ml-2"
                      type="radio"
                      label="female"
                      id="female"
                      name="female"
                      />
                    <Form.Check
                      className="ml-2"
                      type="radio"
                      label="other"
                      id="other"
                      name="other"
                    />
                  </Row>
                </Form.Group>
              </fieldset>
              
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit" onClick={this.onSubmit}>Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
        </div>
    );
  }
};
export default User;