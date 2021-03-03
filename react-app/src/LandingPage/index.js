export default function LandingPage() {
  return (
    <>
      <div className="landpage__textbox">
        <h1 className="landpage__title">Take control of your pantry</h1>
        <p className="landpage__text">Reducing waste in your home kitchen by helping you track your food from the grocery store shelves to your plate.</p>
      </div>
      <div className="landpage__imagecontainer">
        <img id="splashImage" classname="landpage__image" src="" alt="landing page main image" />
        <img id="detailImage" className="landpage__image" src="" alt="landing page secondary image" />
      </div>
    </>
  )
}
