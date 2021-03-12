import { useState } from 'react'
import { useHistory } from 'react-router'
import produce from './images/produce2.jpg'
import './LandingPage.css'

export default function LandingPage({authenticated, setAuthenticated}) {
  const [email, setEmail] = useState("")
  const history = useHistory()
  const startSignup = (e) => {
    history.push({
      pathname: '/sign-up',
      state: {
        tempEmail: email
      }
    })
  }
  return (
    <>
      <div className="landpage__textbox">
        <h1 className="landpage__title">Take Control of Your Pantry</h1>
        <p className="landpage__text">Reducing food waste tracking your food from the grocery store shelves to your plate</p>
      </div>
      <div className="landingpage__signup">
        <div className="fieldset__container">
          <label>Take control today!</label>
          <input className="form__textfield" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
        </div>
        <button className="signup__button  button" onClick={startSignup}>Get Started</button>
      </div>
      <div className="landpage__imagecontainer">
        <img id="splashImage" className="landpage__image" src={produce} alt="produce on store shelves" />

      </div>
    </>
  )
}
