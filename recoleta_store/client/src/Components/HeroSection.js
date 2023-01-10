import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/South-america-river.jpeg' height={765} width={1575} className='river-image'/>
      <h1>LATIN AMERICA AWAITS</h1>
      <p>We're ready... Are you?</p>
    </div>
  );
}

export default HeroSection;