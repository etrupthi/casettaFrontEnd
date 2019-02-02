import React from "react";
import './viewhotelcss.css';
class ViewHotel extends React.Component{
    render(){
        return (
        <div>
            <h1>Hello ViewHotel Page</h1> 
            <button className="danger">Click Me</button><br></br>
                    <span>{this.props.name}</span><br></br>
                    <span>{this.props.location}</span><br></br>
                    <span>{this.props.price}</span><br></br>  
        </div>)
    }
}
export default ViewHotel;