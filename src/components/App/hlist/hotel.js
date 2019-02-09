import React from 'react';
//import ViewHotel from "../viewhotel/index";
import himage from "/Users/AkhilaV/Documents/casettafrontend/src/components/App/image/bg2.jpeg";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class Hotel extends React.Component{

    constructor(props){
        super(props)
       this.onViewClick=this.onViewClick.bind(this)
    }
onViewClick(){
    console.log(this.props.id)
    const ID = this.props.id
   

    this.props.onViewClick(ID)
   
}

render(){
        return(
            <div ><br></br>
            <MDBCol>
            <MDBCard style={{ width: "45em" ,height: "22em",background: "black" }} >
                <MDBCardImage className="img-fluid" src={himage} waves />
                <MDBCardBody className="text-white">
                <MDBCardTitle><span>{this.props.name}</span><br></br></MDBCardTitle>
                <MDBCardText className="text-white">
                            <span>{this.props.location}</span><br></br>
                            <span>{this.props.price}</span><br></br>  
                </MDBCardText>
                <MDBBtn onClick={this.onViewClick}>view</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>        
            </div>
        )
    }   
}

export default Hotel;