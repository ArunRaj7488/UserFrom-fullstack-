import axios from 'axios';


const addUser = (payload) =>  axios.post('http://localhost:4000/api/v1/user', payload);


export default { addUser };