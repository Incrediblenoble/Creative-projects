import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import ShippingInfo from "../components/ShippingInfo";
import NewArrivals from "../components/NewArrivals";
import ProductsDisplay1 from "../components/ProductsDisplay1";
import FrameComponent5 from "../components/FrameComponent5";
import About from "../components/About";
import EmailInput from "../components/EmailInput";
import "./MacBookPro141.css";

const MacBookPro141: FunctionComponent = () => {
  return (
    <div className="macbook-pro-14-1">
      <FrameComponent1
        fORTUNA="pending_8:22"
        pajamassearch="pending_9:68"
        mdicartOutline="pending_9:82"
        mingcuteuser3Line="pending_9:98"
        weuiarrowOutlined="pending_9:38"
        weuiarrowOutlined1="pending_9:42"
        weuiarrowOutlined2="pending_9:49"
        weuiarrowOutlined3="pending_9:46"
        rectangle3="pending_9:104"
      />
      <ShippingInfo
        carbondelivery="pending_13:113"
        mdiclockFast="pending_13:135"
        dashiconsmoneyAlt="pending_13:139"
      />
      <NewArrivals />
      <section className="rectangle-parent">
        <div className="frame-child" />
        <h1 className="products-display1">Products Display</h1>
      </section>
      <section className="product-display-container">
        <ProductsDisplay1 />
        <FrameComponent5 />
      </section>
      <About socialMedia="pending_19:93" />
      <section className="join-our-newsletter-wrapper">
        <h1 className="join-our-newsletter1">Join Our Newsletter</h1>
      </section>
      <EmailInput zondiconsnotification="pending_19:67" />
    </div>
  );
};

export default MacBookPro141;
