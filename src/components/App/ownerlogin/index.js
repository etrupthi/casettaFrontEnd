import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import "./index.css";
class LoginPage extends React.Component{
    constructor() {
        super();
        this.state = {
          form: {
            username:'',
            password:''
          }
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        e.persist();
        let store = this.state;
        store.form[e.target.name] = e.target.value;
        this.setState(store);
      }
    
      submitHandler(e) { 
    
        const url = "http://localhost:9000/users/signin"; 
             let headers = new Headers();
         
             headers.append('Content-Type', 'application/json');
             headers.append('Accept', 'application/json');
         
             headers.append('Access-Control-Allow-Origin', url);
             headers.append('Access-Control-Allow-Credentials', 'true');
         
             headers.append('GET', 'POST','PUT');
             
             e.preventDefault();
             fetch(url, {
                 headers: headers,
                 method: 'PUT',
                 body: JSON.stringify(this.state.form) 
             })
        .then(console.log(this.state.form))
        .then(response=>{console.log(response.status)
            if(response.status==200)
            {
                this.props.history.push(`/addhotels`)
            }
        })
        .catch(() => console.log("Can’t access " + url + " response. "))
        
      }
   render(){
    const { form } = this.state;
    return (
      <center>
      <div className="mydivl">
                <MDBCard>
                <form  onSubmit={this.submitHandler}>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign In</strong>
                </h3>
              </div>
              <MDBInput
                label="Your username"
                group
                name="username" type="text" value={form.username} onChange={this.changeHandler}
              />
              <MDBInput
                label="Your password"
                group
                name="password" type="password" value={form.password} onChange={this.changeHandler}
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  name="submit" value="submit"
                >
                  Sign In
                </MDBBtn>
             </div>
            </MDBCardBody>
            </form>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                        Not a member?
                        <a href="/signup" className="blue-text ml-1">

                        Sign Up
                        </a>
                    </p>
                    </MDBModalFooter>
                </MDBCard>

           
        </div>
        </center>
    );
    }
}

export default LoginPage;