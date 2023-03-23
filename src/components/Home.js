import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <div className='Home'>
      <h1>Hello guys this is Home Page</h1>
      <div className='home_btn_group'>
        <Button className='btn_design' LinkComponent={Link} to='/user'>USER <PersonIcon/></Button>
        <Button className='btn_design' LinkComponent={Link} to='/register'>REGISTER <HowToRegIcon/></Button>
      </div>
    </div>
  )
}

export default Home
