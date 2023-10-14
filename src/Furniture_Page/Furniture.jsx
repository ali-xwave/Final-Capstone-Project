import React from 'react'
import Furniture from '../Furniture_Page_Components/Furniture/Furniture';
import Title from '../Component/Title/title';
import Header from '../Component/Header/header';
import HeaderTwo from '../Component/HeaderTwo/headerTwo';

const FurniturePage = () => {
    return (
        <div>
            <Title />
            <Header />
            <HeaderTwo />
            <Furniture />
        </div>
    )
}

export default FurniturePage;
