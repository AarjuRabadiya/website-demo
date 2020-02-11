import React from 'react';
import { Redirect} from 'react-router-dom'
import './index.css'
import UserIndex from './Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

class UserCheck extends React.Component {
  constructor(props) {
    super(props);
    //console.log("aa",props)
    this.state={
        email:"",
        password:"",
        token:""
    }
}
  render=()=>{
    //console.log(JSON.parse(window.localStorage.getItem('userlogin')))
   // console.log(this.props.isAuthenticated)
    let check=this.props.isAuthenticated
    // if(check===false){
    //   return <Redirect to='/Login'/>
    // }
    // else
    // {
      return <UserIndex></UserIndex>
      
    //}
    
  }
}  
export default UserCheck;
  