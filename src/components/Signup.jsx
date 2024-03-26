import React from 'react';
import "./styles/signup.css";
import swiggylogo from "./Images/swiggyx64.png";

export default function Signup() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className='upperlogo'>
            <img className="signUpLogo" src={swiggylogo} alt="" />
          </div>
          <div className="left">
          <div>
            <div>Sign in</div>
            <div>Use your Gmail Account</div>
          </div>
          </div>
          <div className="right">
            <form action="">
              <input type='text'/>
            </form>
            <div>
              <button style={{border:'none', backgroundColor:'white', color:'blue'}}>Forgot email?</button>
            </div>
          </div>
          <div className="bottom">
            <button style={{border:'none', backgroundColor:'white', color:'blue'}}><div><span>Create Account</span></div></button>
            <button style={{border:'2px', backgroundColor:'blue', color:'white', borderRadius:'18px', padding:'5px 10px', width:'60px'}}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}
