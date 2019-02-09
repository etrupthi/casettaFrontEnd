import React from "react";
import Hotel from "./hotel";
import "./index.css";

class HotelList extends React.Component{
    
    constructor(props){
        super(props);
        this.onViewClick=this.onViewClick.bind(this);

    }
    onViewClick(id){
        this.props.history.push(`/viewhotel/${id}`)
    }
    render(){
        return(
            <div className="hliststyle">
                {this.props.hotel.map(h => <Hotel key={h.id} id={h.id} name={h.name} location={h.location} price={h.price} history={this.props.history} onViewClick={this.onViewClick}/>)}
            </div>
        )
    }
}
export default HotelList;