import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { PRODUCTS } from "../../config";

function Home() {
  return (
    <div>
      <Navbar active="home" />

      <BodyContainer>
        <div className="product-container">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;
