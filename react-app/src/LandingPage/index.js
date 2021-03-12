import produce from './images/produce2.jpg'
import './LandingPage.css'
export default function LandingPage() {
  return (
    <>
      <div className="landpage__textbox">
        <h1 className="landpage__title">Take control of your pantry</h1>
        <p className="landpage__text">Reducing food waste at home by tracking your food from the grocery store shelves to your plate.</p>
      </div>
      <div className="landingpage__signup">
        <div classname="fieldset__container">
          <label>Take control of your pantry today!</label>
          <input classname="form__textfield" placeholder="Enter Email"/>
        </div>
        <button className="signup__button  button">Get Started</button>
      </div>
      <div className="landpage__imagecontainer">
        <img id="splashImage" classname="landpage__image" src={produce} alt="produce on store shelves" />

      </div>
    </>
  )
}
