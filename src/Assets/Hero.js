import React from 'react';
import logo from '../image/kickstarter logo.png'

function Hero() {
  return (
    <section class="hero-container">
        <div className="center-image">
                
                <img src={logo} alt="logoimage" />
                <a href="./">
                <button class=" my-btn btn-red head">Connect Wallet</button>
                </a>
            </div>  

        <div class="hero">
            <h2>Raise and Invest</h2>
            <p>Unlock your Brilliance with our hands-on <a class="link" href="./">beginner</a> and <a class="link" href="https://internship.zuri.team">expert training</a>. Team has been immensely successful in creating a global network of a highly adept intelligent workforce that can help your company
                achieve their mission-critical <a class="link" href="./">projects and goals</a></p>
            <div class="btn-div">
                <a href="./">
                    <button class=" my-btn btn-red">Raise Funds</button>
                </a>
                <br class="d-block d-md-none"></br>
                <a href="./">
                    <button class=" my-btn btn-red-outline">Fund A Project</button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero
