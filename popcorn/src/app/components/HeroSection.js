import React from 'react'
import heroStyles from '../styles/hero.module.css'

export default function HeroSection() {
  return (
    <>
      <div className={heroStyles.hero}>
        <div className="container">
          <h3>Welcome to</h3>
          <h1>POPCORN</h1>
          <h5>One stop solution for all your movies reviews at one place</h5>
          <h4>"Trust me our recommendations are the best"</h4>
        </div>
      </div>
    </>
  );
}
