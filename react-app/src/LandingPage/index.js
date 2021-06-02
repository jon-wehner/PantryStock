import React from 'react';
import LandingPageGetStarted from './LandingPageGetStarted';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landpage__wrapper">
      <div className="landpage__imagecontainer">
        <LandingPageGetStarted />
      </div>
    </div>
  );
}
