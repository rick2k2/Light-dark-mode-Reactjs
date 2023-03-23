import { Button } from '@mui/material';
import React from 'react';
import '../App.css';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='Register'>
      <h1>Hello guys this is Register Page</h1>
      <Button className='btn_design' LinkComponent={Link} to='/user'>USER <PersonIcon/></Button>
    </div>
  )
}

export default Register
