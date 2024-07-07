import { FunctionComponent } from "react";
import Fortuna from "../components/Fortuna";
import Content from "../components/Content";
import AboutPage from "../components/AboutPage";
import NewsletterContainer from "../components/NewsletterContainer";
import "./Cart.css";

const Cart: FunctionComponent = () => {
  return (
    <div className="cart">
      <Fortuna />
      <Content />
      <div className="image-slider">
        <div className="slider-images">
          <img
            className="image-components-icon"
            loading="lazy"
            alt=""
            src="/rectangle-181@2x.png"
          />
          <img
            className="image-components-icon1"
            loading="lazy"
            alt=""
            src="/rectangle-211@2x.png"
          />
          <img
            className="image-components-icon2"
            loading="lazy"
            alt=""
            src="/rectangle-201@2x.png"
          />
          <img
            className="image-components-icon3"
            loading="lazy"
            alt=""
            src="/rectangle-221@2x.png"
          />
        </div>
      </div>
      <AboutPage />
      <NewsletterContainer />
    </div>
  );
};

export default Cart;
