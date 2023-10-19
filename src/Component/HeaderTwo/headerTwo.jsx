import React from 'react'
import "./headertwo.css";
import { Link } from 'react-router-dom';
const HeaderTwo = () => {
    const header = [
        {
            heading: "Furniture"
        },
        {
            heading: "Outdoor"
        },
        {
            heading: "Bedding & Bath"
        },
        {
            heading: "Rugs",
        },


        {
            heading: "Décor & Pillows"
        },
        {
            heading: "Organization"
        },
        {
            heading: "Lighting"
        },
        {
            heading: "Kitchen"
        },
        {
            heading: "Baby & Kids"
        },
        {
            heading: "Home Improvement"
        },
        {
            heading: "Appliances"
        },
        {
            heading: "Pet"
        },
        {
            heading: "Holiday"
        },
        {
            heading: "Shop by Room"
        },

    ]
    return (
        <>
            <hr />
            <div className='d-flex justify-content-between px-3'>

                {header.map((item) => {
                    return (
                        <>
                            <div className='header-display para-style'>
                                <Link href="" className='text-dark text-decoration-none hover'><span>{item.heading}</span></Link>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className='text-center para-style pt-4 color'>
                <p>Sale</p>
            </div>
        </>
    )
}

export default HeaderTwo;
