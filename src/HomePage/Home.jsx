import React from 'react'
import Hero from '../Component/Hero/hero';
import Shope from '../Component/DepartmentShop/shope';
import Deals from '../Component/ShopDeals/Deals';
import Card from '../Component/Cards/Card';
import Brand from '../Component/Brand/brand';
import Excusivebrand from '../Component/ExclusiveBrands/Excusivebrand';
import Ways from '../Component/Wayscard/Ways';
import Impact from '../Component/MakeImpact/Impact';
import Things from '../Component/Things/things';
import Footer from '../Component/Footer/footer';
import Image from '../Component/Image/Image';
import { Outlet } from 'react-router-dom';
const Home = () => {

    return (
        <div>
            <Hero />
            <Shope />
            <Deals />
            <Card />
            <Brand />
            <Excusivebrand />
            <Ways />
            <Impact />
            <Things />
            <Image />
            <Footer />

            <Outlet />
        </div>

    )
}

export default Home;
