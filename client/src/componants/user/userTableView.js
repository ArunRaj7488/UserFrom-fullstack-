import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

class UserTableView extends Component {
	render() {
		return(
				<div>
					<Table striped bordered hover size='sm'>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>PhoneNumber</th>
								<th>Address</th>
							 </tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>ASDF</td>
								<td>ASD@com</td>
								<td>1987678</td>
								<td>ASDDS</td>
							</tr>
						</tbody>
					</Table>	
				</div>
			)
		  }
} ;

export default UserTableView;