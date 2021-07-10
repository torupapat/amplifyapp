import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function App() {
  const signOut = () => {};
  const signIn = () => {};
  const verifyOtp = () => {};
  const verifyAuth = () => {};
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Some message here</p>
        <div>
          <InputGroup className='mb-3'>
            <FormControl placeholder='Phone Number (+XX)' />
            <InputGroup.Append>
              <Button variant='outline-secondary' onClick={signIn}>
                Get OTP
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div>
          <InputGroup className='mb-3'>
            <FormControl placeholder='Your OTP' />
            <InputGroup.Append>
              <Button variant='outline-secondary'
                  onClick={verifyOtp}>
                Confirm
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div>
          <ButtonGroup>
            <Button variant='outline-primary' onClick={verifyAuth}>
              Am I sign in?
            </Button>
            <Button variant='outline-danger' onClick={signOut}>
              Sign Out
            </Button>
          </ButtonGroup>
        </div>
      </header>
    </div>
  );
}

export default App;
