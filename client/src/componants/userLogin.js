import React, { Component } from "react";
import "../styleCss/userLogin.css";
import UserServices from '../services/user'
import { Button, Form, Row, Col } from 'react-bootstrap';
 
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
              userName: '',
              password: '',
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              address: '',
              gender: '',
            },
            fields: ["userName", "password", "firstName", "lastName", "email", "phoneNumber", "address"]
        };
    };

    handleChange = (e) => {
        const {
          name, value
        } = e.currentTarget;
        this.setState({ formData: { ...this.state.formData, [name]: value } });
    };

     onSubmit = async (e) => {
      try {
        e.preventDefault()
        console.log(this.state.formData);
        const res = await UserServices.addUser(this.state.formData);
        console.log('qwewqw', res)
        alert("Add user successfully");
      } catch (err) {
        console.log('somting went wrong!')
      }
    };

    renderFormFields = () => {

      return this.state.fields.map((field) => {
        return <Form.Group as={Row} controlId="formHorizontalText1">
          <Form.Label column sm={2}>
            {field}:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name={field} placeholder={`Enter ${field}`} 
            onChange={(e) => this.handleChange(e)}/>
          </Col>
        </Form.Group>  
      })
    }

    render () {
        return (
          <div className="divTag m-2">
            <Form>
              { this.renderFormFields()}

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
                      name="gender"
                      value="male"
                       onChange={(e) => this.handleChange(e)}
                      />
                    <Form.Check
                      className="ml-2"
                      type="radio"
                      label="female"
                      id="female"
                      value="female"
                      name="gender"
                       onChange={(e) => this.handleChange(e)}
                      />
                    <Form.Check
                      className="ml-2"
                      type="radio"
                      label="other"
                      id="other"
                      name="gender"
                      value="other"
                       onChange={(e) => this.handleChange(e)}

                    />
                  </Row>
                </Form.Group>
              </fieldset>
              
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button onClick={this.onSubmit}>Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
        </div>
    );
  }
};
export default User;