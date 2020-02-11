import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './User.css';
import edit from '../button_image/edit.jpg'
import delet from '../button_image/delet.jpg'

class User extends React.Component{
    constructor(props) {
        super(props);
        //console.log("aa",props)
       // newArray=props.location.params
        this.state={
            email:"",
            password:"",
            token:""
        }
    }
    render=()=>{
        //console.log(this.props)
    let name,email
    let authtoken=JSON.parse(window.localStorage.getItem('userlogin'))
    //console.log("hii",authtoken)
    if(authtoken===null){
        //console.log("hii",authtoken["username"])
        //alert("sorry")
        this.props.history.push('/Login');
    }
    else{
        name=authtoken["username"] 
        email= authtoken["email"] 
        //this.props.history.push('/LoginPage');
    }
    return(
        <Container>
            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td><img src={edit} alt=""></img><img src={delet} alt=""></img></td>
                    </tr>
                </tbody>
                </Table>
        </Container>
    )
}
}
export default User