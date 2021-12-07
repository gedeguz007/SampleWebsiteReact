import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroServices() {
  return (
    <div className='hero-container'>
      <video src='/videos/pull-up.mp4' autoPlay loop muted />
      <h1>Elevate Yourself</h1>
      <p>Now Is The Time</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          TRAIN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WORKOUTS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroServices;