import React from 'react'
import Furnitureimg1 from "../../assets/Furniture1.jpg";
import Furnitureimg2 from "../../assets/Furniture2.webp";
import Furnitureimg3 from "../../assets/Furniture3.jpg";
import Furnitureimg4 from "../../assets/Furniture4.webp";
import Furnitureimg5 from "../../assets/Furniture5.jpg";
import Furnitureimg6 from "../../assets/Furniture6.webp";
import Furnitureimg7 from "../../assets/Furniture7.jpg";
import Furnitureimg8 from "../../assets/Furniture8.jpg";
import Furnitureimg9 from "../../assets/Furniture9.webp";
import Furnitureimg10 from "../../assets/Furniture10.jpg";
import Furnitureimg11 from "../../assets/Furniture11.jpg";
import Furnitureimg12 from "../../assets/Furniture12.jpg"
import Furnitureimg13 from "../../assets/Furniture13.webp";
import { Link } from 'react-router-dom';

const Furniture1 = () => {

    const furnitureCard = [
        {
            imgUlr: Furnitureimg1,
            para: "Living Room Furniture",
        },
        {
            imgUlr: Furnitureimg2,
            para: "Bedroom Furniture",
        },
        {
            imgUlr: Furnitureimg3,
            para: "Kitchen & Dining Furniture",
        },
        {
            imgUlr: Furnitureimg4,
            para: "Office Furniture",
        },
        {
            imgUlr: Furnitureimg5,
            para: "Entry&Mudroom Furniture",
        },
        {
            imgUlr: Furnitureimg6,
            para: "Outdoor & Patio Furniture",
        },
        {
            imgUlr: Furnitureimg7,
            para: "Small Spaces",
        },
        {
            imgUlr: Furnitureimg8,
            para: "Bathroom Furniture",
        },

        {
            imgUlr: Furnitureimg9,
            para: "Baby & Kids Furniture",
        },

        {
            imgUlr: Furnitureimg10,
            para: "Custom Furniture",
        },
        {
            imgUlr: Furnitureimg11,
            para: "Game Tables & Game Room Furniture",
        },
        {
            imgUlr: Furnitureimg12,
            para: "Pet",
        },
        {
            imgUlr: Furnitureimg13,
            para: "Furniture Sale",
        },
    ]
    return (
        <div className='fruniture-bg py-3'>
            <div className='container'>
                <h1 className='py-3'>Furniture</h1>
                <div className='row'>
                    {furnitureCard.map((item) => {
                        return (
                            <>
                                <div className='col-12 col-md-6 col-lg-3'>
                                    <Link to="/LivingRoomFurniture" className='text-decoration-none text-dark'>
                                        <div className='d-flex my-2 py-1 cards fruniture-bg-color'>
                                            <img src={item.imgUlr} alt="" className='img-fluid' />
                                            <span className='d-flex align-items-center ps-2'>{item.para}</span>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Furniture1;
