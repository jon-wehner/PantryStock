export default function LandingPage() {
  return (
    <>
      <div className="landpage__textbox">
        <h1 className="landpage__title">Take control of your pantry</h1>
        <p className="landpage__text">Reducing foood waste at home by tracking your food from the grocery store shelves to your plate.</p>
      </div>
      <div className="landingpage_signup">
        <div classname="fieldset__container">
          <label classname="form__label">Take control of your pantry today!</label>
          <input classname="form__textfield" placeholder="Enter Email"/>
        </div>
        <button className="signup__button  button">Get Started</button>
      </div>
      <div className="landpage__imagecontainer">
        <img id="splashImage" classname="landpage__image" src="" alt="landing page main image" />
        <img id="detailImage" className="landpage__image" src="" alt="landing page secondary image" />
      </div>
    </>
  )
}
