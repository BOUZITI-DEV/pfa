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
    <form>
      <div className="d-flex justify-content-center">
        <div className='d-flex flex-column justify-content-center h-custom-2 w-50 pt-4'>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" id="form2Example1" class="form-control" placeholder='email'/>
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Mot de passe</label>
            <input type="password" id="form2Example2" class="form-control" placeholder='Mot de passe'/>
          </div>
          <button type="button" class="btn btn-primary btn-block mb-4" style={btnStyle}>Se connecter</button>
        </div>
      </div>
    </form>
  );
}

export default LoginEtudiants;