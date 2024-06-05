import { useState } from 'react';
import HeroSection from './HeroSection';
import Welcome from './Welcome';
import Features from './Features';
import Banking from './Banking';
import JoinSurfCash from './JoinSurfCash';
import Footer from './Footer';

function App() {
    return(
      <div>
        <HeroSection/>
        <Welcome/>
        <Features/>
        <Banking/>
        <JoinSurfCash/>
        <Footer/>
      </div>
    );
}

export default App
