import "./App.css";
import Brand from "./Component/Brand/brand";
import Card from "./Component/Cards/Card";
import Shope from "./Component/DepartmentShop/shope";
import Excusivebrand from "./Component/ExclusiveBrands/Excusivebrand";
import Header from "./Component/Header/header";
import Hero from "./Component/Hero/hero";
import Impact from "./Component/MakeImpact/Impact";
import Deals from "./Component/ShopDeals/Deals";
import Title from "./Component/Title/title";
import Ways from "./Component/Wayscard/Ways";

function App() {
  return (
    <>
    <Title />
    <Header />
    <Hero />
    <Shope />
    <Deals />
    <Card />
    <Brand />
    <Excusivebrand />
    <Ways />
    <Impact />
    </>
  );
}

export default App;
