import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import User from './components/User';

const App = ()=>{
  return(
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </React.Fragment>
  )
}

export default App