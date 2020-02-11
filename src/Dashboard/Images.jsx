import React from 'react';
import { Container} from 'react-bootstrap';
import image from '../media/images.jpg'
import './Images.css';

class Images extends React.Component{
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
    return(
        <Container className="p-5">
            <center>
            <img className="homeimagestyle" src={image} alt=""></img>
            </center>
        </Container>
    )
}
}
export default Images