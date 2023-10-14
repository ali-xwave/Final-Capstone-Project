import React from 'react'
import logo from "../../src/assets/Header-logo.svg";
import { Link } from 'react-router-dom';
const SignUpPage = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between pt-4'>
                        <Link to="/"><img src={logo} alt="" className='img-fluid' /></Link>
                        <div>
                            <p>Secure Login</p>
                        </div>
                    </div>
                    <hr />
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div>
                            <h1 className='text-center pb-3'>Sign Up</h1>
                            <form>
                                <div className='text-center '>
                                    <input name="text" placeholder='Enter Your First Name' className='rounded-pill  px-3 py-2' /> <br />
                                    <input name="text" placeholder='Enter Your Last Name' className='my-4 rounded-pill px-3 py-2' /> <br />
                                    <input name="email" placeholder='Enter Your Email 'className='rounded-pill px-3 py-2' /> <br />
                                    <input name="Password" placeholder='Enter Your Password' className='rounded-pill my-4 px-3 py-2' /><br />
                                    <Link to="/"><input type="submit" value="Sign Up" className='bg-color text-white border-0 rounded-pill p-2'/></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
