import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Button } from '@mui/material';

const User = () => {
  return (
    <div className='User'>
      <h1>Hello guys This is User Page</h1>
      <Button className='btn_design' LinkComponent={Link} to='/register'>REGISTER <HowToRegIcon/></Button>
    </div>
  )
}

export default User
