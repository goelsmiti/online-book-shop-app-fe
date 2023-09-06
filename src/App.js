import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { Header } from './components/Header';
import { About } from './components/About';
import { useEffect } from 'react';
import axios from 'axios';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { Newproduct } from './components/Newproduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/main" element={<App />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about/:details" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproduct" element={<Newproduct />}></Route>
          {/* <Route path="cart" element={}></Route> */}

        </Routes>
      </BrowserRouter>

      <Outlet />
    </div>
  )
}

export default App;
