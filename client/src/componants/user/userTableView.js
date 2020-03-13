import React, { Component } from 'react';

import { Table, Button } from 'react-bootstrap';

class UserTableView extends Component {
	render() {
		return(
				<div>
					<Table  bordered hover size='sm'>
						<thead>
							<tr style={{ backgroundColor: '#4CAF50'}}>
								<th>#</th>
								<th>Email</th>
								<th>Name</th>
								<th>PhoneNumber</th>
								<th>Address</th>
								<th>Action</th>
							 </tr>
						</thead>
						<tbody>
						  { this.props.getUserData.map( item => (
							<tr>	
								<td>{this.props.getUserData.indexOf(item)+1}</td>
								<td>{item.email}</td>
								<td>{item.firstName} {item.lastName}</td>
								<td>{item.phoneNumber}</td>
								<td>{item.address}</td>
								<td>
									<Button variant='link'>upadate</Button>|
									<Button variant='link'>Delete</Button>
								</td>
							</tr>							))
							}
						</tbody>
					</Table>	
				</div>
			)
		  }
} ;

export default UserTableView;