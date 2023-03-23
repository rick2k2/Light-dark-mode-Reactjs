import React,{useState,useEffect} from 'react'
import {Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {

  // const [icon,setIcon] = useState(false);
  const [darkMode,setDarkMode] = useState(false);

  useEffect(()=>{
    // console.log(darkMode);
    document.body.style.setProperty('--background-color', darkMode ? "black" : "white");
    document.body.style.setProperty('--text-color', darkMode ? "white" : "black");
  },[darkMode])

  const toggleMode = ()=>{
    // setIcon(!icon);
    setDarkMode(!darkMode);
  }

  return (
    <div className='Header'>
      <Button className='btn_design' LinkComponent={Link} to='/'>Home<HomeIcon/></Button>
      <h1>RICK APP</h1>
      <Button className='btn_design' onClick={toggleMode}>
          { !darkMode ? <>DarkMode<DarkModeIcon/></> : <>LightMode<WbSunnyIcon/></>}
      </Button>
    </div>
  )
}

export default Header
