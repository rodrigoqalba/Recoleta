import React, { useEffect, useState, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import './App.css';

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
