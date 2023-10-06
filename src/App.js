import "./App.css";
import Brand from "./Component/Brand/brand";
import Card from "./Component/Cards/Card";
import Shope from "./Component/DepartmentShop/shope";
import Excusivebrand from "./Component/ExclusiveBrands/Excusivebrand";
import Footer from "./Component/Footer/footer";
import Header from "./Component/Header/header";
import HeaderTwo from "./Component/HeaderTwo/headerTwo";
import Hero from "./Component/Hero/hero";
import Image from "./Component/Image/Image";
import Impact from "./Component/MakeImpact/Impact";
import Deals from "./Component/ShopDeals/Deals";
import Things from "./Component/Things/things";
import Title from "./Component/Title/title";
import Ways from "./Component/Wayscard/Ways";

function App() {
  return (
    <>
    <Title />
    <Header />
    <HeaderTwo />
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
    </>
  );
}

export default App;
