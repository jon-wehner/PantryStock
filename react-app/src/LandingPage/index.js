import LandingPageGetStarted from './LandingPageGetStarted'
import './LandingPage.css'

export default function LandingPage({authenticated, setAuthenticated}) {
  return (
    <div className="landpage__wrapper">
      <div className="landpage__imagecontainer">
        <LandingPageGetStarted />
      </div>
    </div>
  )
}
