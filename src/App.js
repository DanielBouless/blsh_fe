import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavigationBar from './components/NavigationBar';
import SignUp from './pages/SignUp';
import CurrentUserProvider from './context/CurrentUser';

function App() {
  return (
    <CurrentUserProvider>
    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
