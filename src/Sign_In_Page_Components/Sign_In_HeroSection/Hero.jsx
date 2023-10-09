import React from 'react'
import "./SignIn.css"
import logo from "../../assets/Header-logo.svg";
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-between pt-4'>
                    <Link to="/" ><img src={logo} alt="" className='img-fluid' /></Link>
                    <div>
                        <p>Secure Login</p>
                    </div>
                </div>
                <hr />
                <div className='text-center Sign_hero_width'>
                    <h1 className='py-4 style'>Enter your email address to sign in or <br /> to create an account</h1>
                    <div className='pb-3 d-flex justify-content-center para-style'>
                        <input className='px-3 py-2 rounded para-style' type="email" placeholder='Email Address' />
                    </div>
                    <input className='px-3 py-2 rounded-pill para-style border-0 button text-white' type="submit" value='Continue' />
                </div>
            </div>
        </div>
    )
}

export default Hero
