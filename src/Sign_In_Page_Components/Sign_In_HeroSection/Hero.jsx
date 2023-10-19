import React, { useState } from 'react'
import "./SignIn.css"
import logo from "../../assets/Header-logo.svg";
import { Link } from 'react-router-dom';
const Hero = () => {
    const [userEmail, setUserEmail] = useState("");
    const [emailMesg, setEmailMesg] = useState(
        "Enter your vaild Email or Phone Number"
    );
    const [showUserEmailError, setShowUserEmailError] = useState(false);

    const [userPassword, setUserPassword] = useState("");
    const [passwordMesg, setPasswordMesg] = useState("Enter your vaild password");
    const [showUserPasswordError, setShowUserPasswordError] = useState(false);

    const userEmailHandler = (e) => {
        setUserEmail(e.target.value);

        if (userEmail !== "")
            // setShowUserEmailError(false)
            setEmailMesg("Looks Good");
    };

    const userPasswordHandler = (e) => {
        setUserPassword(e.target.value);

        if (userPassword !== "")
            // setShowUserPasswordError(false)
            setPasswordMesg("Looks Good");
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (userEmail === "") {
            setShowUserEmailError(true);
        }

        if (userPassword === "") {
            setShowUserPasswordError(true);
        }
    };

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
                    <form onSubmit={submitHandler}>
                        <div className="container-fluid ">
                            <div className="col-md-12">
                                <input
                                    className='px-3 py-2 rounded-pill para-style border'
                                    value={userEmail}
                                    onChange={userEmailHandler}
                                    type="email"
                                    placeholder="Mobile Number or Email Address"
                                />
                                {showUserEmailError && (
                                    <p className={`${emailMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold `}>{emailMesg}</p>
                                )}
                            </div>
                            <div className="col-md-12 py-4">
                                <input
                                    className='px-3 py-2 rounded-pill para-style border'
                                    value={userPassword}
                                    onChange={userPasswordHandler}
                                    type="password"
                                    placeholder="Password"
                                />
                                {showUserPasswordError && (
                                    <p className={`${passwordMesg === "Looks Good" ? "text-success" : "text-danger"} fw-bold`}>{passwordMesg}</p>
                                )}
                            </div>
                        </div>

                        <div className="">
                            <input className='px-3 py-2 rounded-pill para-style border-0 button text-white' type="submit" value='Continue' />
                        </div>
                    </form>
                    <div className="pt-3">
                        <Link to="/SignUp"><input className='px-3 py-2 rounded-pill para-style border-0 button text-white' type="submit" value='Create a New Account' /></Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero
