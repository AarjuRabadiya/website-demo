import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import './index.css'
import User from './User'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Images from './Images'
import proimage from '../media/images2.jpg'

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log("aa",props)
   // newArray=props.location.params
    this.state={
        email:"",
        password:"",
        token:""
    }
}
  render=()=>{
    console.log(window.localStorage.getItem('userlogin'))
    //console.log("hi",this.props.match)
    let array=JSON.parse(window.localStorage.getItem('userlogin'))
    if(array===null){
      return <Redirect to="/Login"></Redirect>
    }
    else{
    let authtoken=JSON.parse(window.localStorage.getItem('userlogin'))
    let name=authtoken['username'];
    return (
      <>
      <Container className="conbgcolor pt-1 mt-3 backstyle">
        <Router>
        <Row className="ml-3 pl-3">
          <Col md={2}>
          <Row>
            <img className="imgstyle" src={proimage} alt=""></img>
          </Row>
          <Row><p><b>{name}</b></p></Row><hr/>
          <Row><Link to="/Dashboard"><b><p>Home</p></b></Link></Row>  
          <Row><Link to="/Dashboard/User"><b><p>User</p></b></Link></Row> 
          </Col>
          <Col>
          <Route exact path="/Dashboard" component={Images} />
          <Route path="/Dashboard/User" component={User} />
          </Col>
        </Row>
        </Router>    
      </Container>
    </>
    );
    }
  }
}  
export default UserIndex;
  