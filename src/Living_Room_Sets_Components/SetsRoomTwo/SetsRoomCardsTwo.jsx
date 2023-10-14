import React from 'react'
import img4 from "../../assets/Room+Set4.jpg";
import img5 from "../../assets/Room+Set5.jpg";
import img6 from "../../assets/Room+Set6.jpg";
import imgstar from "../../assets/stars.svg";
const SetsRoomCardsTwo = () => {
    const card = [
        {
            img: img4,
            imgurl: imgstar,
            txt1: "Marti 2 - Piece Living Room Set by House of Hampton®",
            txt2: "$1,019.99",
            txt3: "$1,199.99",
            txt4: "(263)",
            txt7: "From",
        },

        {
            img: img5,
            imgurl: imgstar,
            txt1: "3 - Piece Living Room Set by Latitude Run®",
            txt2: "$839.99",
            txt3: "$1,049.99",
            txt4: "(38)",
            txt5: "Free shiping",
            txt6: "Sponsored",
            txt7: "From",
        },

        {
            img: img6,
            imgurl: imgstar,
            txt1: "Abdulhameed 2 - Piece Living Room Set by House of Hampton®",
            txt2: "$959.99",
            // txt3: "$1,199.99",
            txt4: "(128)",
            txt5: "Free shiping",
            txt7: "From",
        },
    ]
    return (
        <div>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12 col-lg-3'></div>
                    {card.map((item) => {
                        return (
                            <>

                                <div className='col-12 col-lg-3'>
                                    <div>
                                        <img src={item.img} alt='' className='img-fluid' />
                                        <p>{item.txt1}</p>
                                        <div className='d-flex'>
                                            <span className='pt-2'>{item.txt7}</span>
                                            <h2>{item.txt2}</h2><p className='pt-2 ps-2'><del>{item.txt3}</del></p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={item.imgurl} alt="" className='img-fluid w-50' />
                                            <p className='pt-3'>{item.txt4}</p>


                                        </div>
                                        <p>{item.txt5}</p>
                                        <p className='d-flex justify-content-end'>{item.txt6}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SetsRoomCardsTwo
