import React from 'react'
import "./headertwo.css";
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
            heading: "Rugs"
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
                                <a href="" className='color-b'><span>{item.heading}</span></a>
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
