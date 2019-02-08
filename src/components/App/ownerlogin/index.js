import React from "react";
import "./index.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer className="mydiv">
      <MDBRow>
        <MDBCol md="6">
         
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong>SIGN</strong>
                  <a href="#!" className="green-text font-weight-bold">
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput className="white-text" label="Your email" group type="text" validate />
              <MDBInput className="white-text" label="Your password" group type="password" validate />
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md="12">
                <p className="font-small white-text d-flex justify-content-end">
                  Have an account?
                  <a href="#!" className="green-text ml-1 font-weight-bold">
                    Log in
                  </a>
                </p>
              </MDBCol>
            </div>
         
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
