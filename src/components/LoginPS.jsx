import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from "./photo/emsi.jpg";
import './CSS/Login.css';

function LoginEtudiants() {
  const btnStyle = {
    backgroundColor: '#57ae4d'
  };

  return (
    <MDBContainer fluid>

      <MDBRow>

        <MDBCol sm='6'>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Professeur/Surveillant:</h3>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Login' id='formControlLg' type='text' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' placeholder='Mot de passe' id='formControlLg' type='password' size="lg"/>
            <MDBBtn className="mb-4 px-5 mx-5 w-100" size='lg' style={btnStyle}>Se connecter</MDBBtn>

          </div>
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src={photo}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginEtudiants;