import React from "react";
import HotelList from "./hlist/index";
import ViewHotel from "./viewhotel/index";
import NavBar from "./navbar/index";
import "./image/index.css";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom'
import FormPage from "./ownerlogin";

class App extends React.Component{
   constructor(props){
      super(props)
       this.state = {
       data:[]
      }
   }
      componentDidMount(){

         const url = "http://localhost:9000/hotels"; 
         let headers = new Headers();
     
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
     
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
     
         headers.append('GET', 'POST');
     
         fetch(url, {
             headers: headers,
             method: 'GET'
         })
         .then(response => response.json())
         .then(contents => {console.log("in fetch: "+ contents);
                             this.setState ({
                             data : contents})
              })
         .catch(() => console.log("Can’t access " + url + " response. "))
        
     }

   render(){
      return(
         <Router>
            <Switch>
               <Route exact path="/home" render={(props) => {
                  return(
                     <div>
                        <NavBar/>
                        <HotelList 
                        hotel={this.state.data}
                        history={props.history}/>
                     </div>
                  )
               }} />
               <Route exact path="/viewhotel/:id"  render={(props) => {
                  const hid = props.match.params.id
                  const hdata=this.state.data[hid-1]
                  var arr = [];
                  for (var key in hdata) {
                     arr.push(hdata[key]);
                  }
                  console.log(arr)
                  const newRecord = {
                     name: arr[1],
                     location: arr[2],
                     price: arr[3]
                  }
            
                  return(
                     <div>
                        <NavBar/>
                        <ViewHotel
                           name  = {newRecord.name} 
                           location = {newRecord.location} 
                           price  = {newRecord.price}
                           history={props.history}
                         />
                     </div>
                  )
               }}/>
               <Route exact path="/login">
               <FormPage/>
               </Route>
               <Redirect to="/home"/>
            </Switch> 
         </Router>
      );
   }
}



export default App;