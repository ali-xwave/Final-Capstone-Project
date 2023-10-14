import React from 'react'
import "./Room.css"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Furnitureimg1 from "../../assets/LivigRoomfurnitureimg1.jpg";
import Furnitureimg2 from "../../assets/LivigRoomfurnitureimg2.jpg";
import Furnitureimg3 from "../../assets/LivigRoomfurnitureimg3.jpg";
import Furnitureimg4 from "../../assets/LivigRoomfurnitureimg4.jpg";
import Furnitureimg5 from "../../assets/LivigRoomfurnitureimg5.jpg";
import Furnitureimg6 from "../../assets/LivigRoomfurnitureimg6.jpg";
import Furnitureimg7 from "../../assets/LivigRoomfurnitureimg7.jpg";
import Furnitureimg8 from "../../assets/LivigRoomfurnitureimg8.jpg";
import Furnitureimg9 from "../../assets/LivigRoomfurnitureimg9.jpg";
import Furnitureimg10 from "../../assets/LivigRoomfurnitureimg10.jpg";
import Furnitureimg11 from "../../assets/LivigRoomfurnitureimg11.jpg";
import Furnitureimg12 from "../../assets/LivigRoomfurnitureimg12.jpg"
import Furnitureimg13 from "../../assets/LivigRoomfurnitureimg13.jpg";
import Furnitureimg14 from "../../assets/LivigRoomfurnitureimg14.jpg";
import Furnitureimg15 from "../../assets/LivigRoomfurnitureimg15.jpg";
import Furnitureimg16 from "../../assets/LivigRoomfurnitureimg16.jpg";
import { Link } from 'react-router-dom';
const Room = () => {
    const Room = [
        {
            imgUlr: Furnitureimg1,
            para: "Sectionals",
        },
        {
            imgUlr: Furnitureimg2,
            para: "Sofas",
        },
        {
            imgUlr: Furnitureimg3,
            para: "Living Room Sets",
        },
        {
            imgUlr: Furnitureimg4,
            para: "Chairs & Seats",
        },
        {
            imgUlr: Furnitureimg5,
            para: "Coffe Tables & End Tables",
        },
        {
            imgUlr: Furnitureimg6,
            para: "Loveseats",
        },
        {
            imgUlr: Furnitureimg7,
            para: "TV Stands & Media Storage Furniture",
        },
        {
            imgUlr: Furnitureimg8,
            para: "Cabinets & Chests",
        },

        {
            imgUlr: Furnitureimg9,
            para: "Console Tables",
        },

        {
            imgUlr: Furnitureimg10,
            para: "Ottomans & Poufs",
        },
        {
            imgUlr: Furnitureimg11,
            para: "Small Space Living Rooms",
        },
        {
            imgUlr: Furnitureimg12,
            para: "Bookcases",
        },
        {
            imgUlr: Furnitureimg13,
            para: "Futons & Daybeds",
        },
        {
            imgUlr: Furnitureimg14,
            para: "Fireplaces & Stoves",
        },
        {
            imgUlr: Furnitureimg15,
            para: "Slipcovers",
        },
        {
            imgUlr: Furnitureimg16,
            para: "Living Room Furniture Sale",
        },

    ]
    return (
        <div className='fruniture-bg py-3'>
            <div className='container'>
            
                <p className='pt-4'>Furniture Living Room Furniture</p>
                <Link to="/FurniturePage" className='text-decoration-none'><p className='text-danger'> <FontAwesomeIcon icon={faArrowLeft} /> Furniture</p></Link>
                <h1 className='pt-2 pb-4'>Living Room Furniture</h1>
                <div className='row'>

                    {Room.map((item) => {
                        return (
                            <>
                                <div className='col-12 col-md-6 col-lg-3'>
                                    <Link to="/LivingRoomSets" className='text-decoration-none text-dark'>
                                        <div className='d-flex my-2 py-1 cards fruniture-bg-color'>
                                            <img src={item.imgUlr} alt="" className='img-fluid' />
                                            <span className='d-flex align-items-center ps-2'>{item.para}</span>
                                        </div></Link>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Room
