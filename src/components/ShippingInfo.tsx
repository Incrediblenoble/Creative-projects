import { FunctionComponent } from "react";
import "./ShippingInfo.css";

export type ShippingInfoType = {
  className?: string;
  carbondelivery?: string;
  mdiclockFast?: string;
  dashiconsmoneyAlt?: string;
};

const ShippingInfo: FunctionComponent<ShippingInfoType> = ({
  className = "",
  carbondelivery,
  mdiclockFast,
  dashiconsmoneyAlt,
}) => {
  return (
    <section className={`shipping-info ${className}`}>
      <div className="shipping-container">
        <div className="shipping-detail-container">
          <div className="shipping-icon-container">
            <img
              className="carbondelivery-icon"
              loading="lazy"
              alt=""
              src={carbondelivery}
            />
            <div className="free-shipping-over-50-in-ile-wrapper">
              <div className="free-shipping-over">
                Free Shipping over $50 in Ile-ife
              </div>
            </div>
          </div>
          <div className="shipping-icon-container1">
            <img
              className="mdiclock-fast-icon"
              loading="lazy"
              alt=""
              src={mdiclockFast}
            />
            <div className="fast-delivery-wrapper">
              <div className="fast-delivery">Fast Delivery</div>
            </div>
          </div>
          <div className="guarantee-container">
            <div className="guarantee-icon-container">
              <img
                className="dashiconsmoney-alt"
                loading="lazy"
                alt=""
                src={dashiconsmoneyAlt}
              />
              <div className="days-guarantee-wrapper">
                <div className="days-guarantee">90 Days Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-header">
        <div className="product-header-child" />
        <h1 className="latest-product-in">Latest Product in Stock</h1>
      </div>
    </section>
  );
};

export default ShippingInfo;
