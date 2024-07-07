import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import ShippingInfo from "../components/ShippingInfo";
import ProductSlider from "../components/ProductSlider";
import ProductsDisplay from "../components/ProductsDisplay";
import FrameComponent from "../components/FrameComponent";
import About from "../components/About";
import EmailInput from "../components/EmailInput";
import "./MacBookPro14.css";

const MacBookPro14: FunctionComponent = () => {
  return (
    <div className="macbook-pro-14-2">
      <FrameComponent1
        fORTUNA="/fortuna.svg"
        pajamassearch="/pajamassearch.svg"
        mdicartOutline="/mdicartoutline.svg"
        mingcuteuser3Line="/mingcuteuser3line.svg"
        weuiarrowOutlined="/weuiarrowoutlined@2x.png"
        weuiarrowOutlined1="/weuiarrowoutlined@2x.png"
        weuiarrowOutlined2="/weuiarrowoutlined@2x.png"
        weuiarrowOutlined3="/weuiarrowoutlined@2x.png"
        rectangle3="/rectangle-3@2x.png"
      />
      <ShippingInfo
        carbondelivery="/carbondelivery.svg"
        mdiclockFast="/mdiclockfast.svg"
        dashiconsmoneyAlt="/dashiconsmoneyalt.svg"
      />
      <ProductSlider />
      <div className="macbook-container">(4)</div>
      <div className="macbook-container1">(8)</div>
      <section className="product-display-header">
        <div className="product-display-header-child" />
        <h1 className="products-display">Products Display</h1>
      </section>
      <section className="product-display">
        <ProductsDisplay />
        <FrameComponent />
      </section>
      <About socialMedia="/social-media.svg" />
      <section className="newsletter">
        <h1 className="join-our-newsletter">Join Our Newsletter</h1>
      </section>
      <EmailInput zondiconsnotification="/zondiconsnotification.svg" />
    </div>
  );
};

export default MacBookPro14;
