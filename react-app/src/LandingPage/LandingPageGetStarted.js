import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPageGetStarted() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const startSignup = () => {
    navigate.push({
      to: '/sign-up',
      state: {
        tempEmail: email,
      },
    });
  };
  return (
    <div className="landpage__background">
      <div className="landpage__textbox">
        <h1 className="landpage__title">Take Control of Your Pantry</h1>
        <p className="landpage__text">Track your food from the grocery store shelves to your plate</p>
      </div>
      <div className="landingpage__signup">
        <div className="fieldset__container">
          <input className="form__textfield" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="signup__button  button" type="submit" onClick={startSignup}>Get Started</button>
      </div>
    </div>
  );
}
