import React from "react";
import "./index.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form: {
        email: '',
        subject: '',
        body: '',
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount(){

    const url = "http://localhost:9000/users"; 
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST');
    var body= {
      username: "khila",
      email:"akhila@123.com",
      password: "khila"
  };
  console.log({body})
    fetch(url, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body), 
    })
    .catch(() => console.log("Can’t access " + url + " response. "))
   
}
changeHandler(e) {
    e.persist();
    let store = this.state;
    store.form[e.target.name] = e.target.value;
    this.setState(store);
  }

  submitHandler(e) { 
    e.preventDefault();
    fetch('/messages', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      data: JSON.stringify(this.state.form) 
    });
  }

  render(){
  return (
    <div>
    <MDBContainer className="mydiv">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
              <form onSubmit={this.onSignSubmit}>
                
              </form>
              <MDBInput
                label="Your username"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign Up
                </MDBBtn>
                <form/>
             </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Have an account?
                <a href="/login" className="blue-text ml-1">
                 Login
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
  }
};


export default SignUpPage;
