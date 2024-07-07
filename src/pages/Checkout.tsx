import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import Reviews from "../components/Reviews";
import FrameComponent2 from "../components/FrameComponent2";
import "./Checkout.css";

const Checkout: FunctionComponent = () => {
  return (
    <div className="checkout">
      <FrameComponent4 />
      <FrameComponent3 />
      <Reviews />
      <section className="similar-products-container-wrapper">
        <div className="similar-products-container">
          <div className="similar-products-container-child" />
          <h1 className="similar-products">Similar Products</h1>
        </div>
      </section>
      <section className="product-carousel">
        <div className="carousel-items">
          <img
            className="product-placeholders-icon"
            loading="lazy"
            alt=""
            src="/rectangle-151@2x.png"
          />
          <img
            className="product-placeholders-icon1"
            loading="lazy"
            alt=""
            src="/rectangle-41@2x.png"
          />
          <img
            className="product-placeholders-icon2"
            loading="lazy"
            alt=""
            src="/rectangle-191@2x.png"
          />
          <img
            className="product-placeholders-icon3"
            loading="lazy"
            alt=""
            src="/rectangle-171@2x.png"
          />
        </div>
      </section>
      <FrameComponent2 />
    </div>
  );
};

export default Checkout;
