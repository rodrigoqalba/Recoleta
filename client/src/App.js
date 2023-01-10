import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage"
import './App.css';
import Home from './pages/Home';

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(() => user));
      }
      console.log(r.status)
    });

  }, []);

  console.log(user)

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product-page/:id' element={<ProductPage user={user}/> } />
      </Routes>
    </>
  );
}

export default App;
