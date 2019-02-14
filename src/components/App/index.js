import React from "react";
import HotelList from "./hlist/index";
import ViewHotel from "./viewhotel/index";
import NavBar from "./navbar/index";
import "./image/index.css";
import SignUpPage from "./ownersignup";
import LoginPage from "./ownerlogin";
import FooterPage from "./footer";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom'


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
                     <div className="homeb">
                        <NavBar/><br></br>
                        <HotelList 
                        hotel={this.state.data}
                        history={props.history}/>
                        <FooterPage/>
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
                     <div className="viewhb">
                        <div style={{height:"100vh"}}>
                           <NavBar/>
                           <ViewHotel
                              name  = {newRecord.name} 
                              location = {newRecord.location} 
                              price  = {newRecord.price}
                              history={props.history}
                           />
                         </div>
                         <FooterPage/>
                     </div>
                  )
               }}/>
               <Route exact path="/signup" render={(props) => {
                  return(
                     <div className="loginb">
                        <NavBar/>
                        <SignUpPage history={props.history}/>
                     </div>
                  )
               }} />
               <Route exact path="/login" render={(props) => {
                  return(
                     <div className="loginb">
                        <NavBar/>
                        <LoginPage history={props.history}/>
                     </div> 
                  )
               }} />
               <Route exact path="/ownerp" render={(props) => {
                  return(
                     <div>
                        owner page on login
                     </div>
                  )

               }}/>
               <Redirect to="/home"/>
            </Switch> 
         </Router>
      );
   }
}



export default App;