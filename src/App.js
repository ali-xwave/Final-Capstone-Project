import "./App.css";
import Card from "./Component/Cards/Card";
import Shope from "./Component/DepartmentShop/shope";
import Header from "./Component/Header/header";
import Hero from "./Component/Hero/hero";
import Deals from "./Component/ShopDeals/Deals";
import Title from "./Component/Title/title";

function App() {
  return (
    <>
    <Title />
    <Header />
    <Hero />
    <Shope />
    <Deals />
    <Card />
    </>
  );
}

export default App;
