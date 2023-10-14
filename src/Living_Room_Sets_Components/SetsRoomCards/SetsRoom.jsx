import React from 'react'
import "./setsRoom.css"
import img1 from "../../assets/Room+Set1.jpg";
import img2 from "../../assets/Room+Set2.jpg";
import img3 from "../../assets/Room+Set3copy.jpg";
import imgstar from "../../assets/stars.svg";
import { Link } from 'react-router-dom';

const SetsRoom = () => {

    const card = [
        {
            img: img1,
            imgurl: imgstar,
            txt1: "Fetch - Piece Living Room Set by Resdorf Park",
            txt2: "$649.99",
            txt3: "$809.99",
            txt4: "(36)",
            txt7: "From",
        },

        {
            img: img2,
            imgurl: imgstar,
            txt1: "Dacee 2 - Piece Living Room Set by Hokku Designs",
            txt2: "$3,050.00",
            txt4: "(235)",
            txt5: "Free shiping",
            txt6: "Sponsored",
            txt7: "From",
        },

        {
            img: img3,
            imgurl: imgstar,
            txt1: "Bowsworth 2 Piece Living Room Set by Alocott Hill®",
            txt2: "$1,019.99",
            txt3: "$1,199.99",
            txt4: "(571)",
            txt5: "Free shiping",
            txt7: "From",
        },
    ]
    return (
        <div>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12 col-lg-3 '>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Category
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                       
                                        <div className="scrollable-list">
                                        <ul class="list-unstyled ">
                                        <p className='ms-0'>Living Room Furniture</p>
                                            <li class=" py-2 fw-bold">Living Room Sets</li>
                                            <li class=" py-2 ">Sectionals</li>
                                            <li class=" py-2 ">Sofas</li>
                                            <li class=" py-2 ">Chairs & Seating</li>
                                            <li class=" py-2 ">Coffee Tables & End Tables</li>
                                            <li class=" py-2 ">Loveseats</li>
                                            <li class=" py-2 ">TV Stands & Media Storage Furniture</li>
                                            <li class=" py-2 ">Cabinets & Chests</li>
                                            <li class=" py-2 ">Console Tables</li>
                                            <li class=" py-2 ">Ottomans & Poufs</li>
                                            <li class=" py-2 ">Small Space Living Rooms</li>
                                            <li class=" py-2 ">Bookcases    </li>
                                            <li class=" py-2 ">Futons & Daybeds</li>
                                            <li class=" py-2 ">Fireplaces & Stoves</li>
                                            <li class=" py-2 ">Slipcovers</li>
                                            <li class=" py-2 ">Living Room Furniture Sale</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                    </div>
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
                                            <p className='pt-3'>{item.txt4}</p>
                                            <img src={item.imgurl} alt="" className='img-fluid w-50 ps-2' />
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

export default SetsRoom
