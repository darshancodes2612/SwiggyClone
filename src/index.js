import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar/>
          }
        >
          <Route
            index
            element={<Login/>}
          />
          <Route
            exact
            path="/signup"
            element={<Signup/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
