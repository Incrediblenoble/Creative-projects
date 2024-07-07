import { FunctionComponent } from "react";
import "./Content.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="product">
        <div className="product-child" />
        <div className="product-details1">
          <div className="product-details-child" />
          <img
            className="product-image-icon2"
            loading="lazy"
            alt=""
            src="/rectangle-162@2x.png"
          />
          <div className="product-info1">
            <h1 className="bluetooth-speaker1">Bluetooth Speaker</h1>
            <div className="color-info">
              <div className="color-parent">
                <h1 className="color">Color:</h1>
                <h1 className="red">Red</h1>
              </div>
              <div className="space">$ 22</div>
            </div>
            <div className="price-info">
              <div className="price-image" />
              <div className="price-value-parent">
                <h2 className="price-value">_</h2>
                <div className="line-wrapper">
                  <div className="line-div" />
                </div>
              </div>
              <div className="delivery-info">
                <div className="div3">1</div>
              </div>
              <div className="rating-info">
                <div className="line-parent">
                  <div className="frame-child2" />
                  <h2 className="rating-value1">+</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-summary-parent">
          <div className="order-summary">
            <div className="order-summary-child" />
            <div className="summary-title">
              <div className="order-summary-wrapper">
                <div className="order-summary1">Order Summary</div>
              </div>
              <div className="summary-title-child" />
            </div>
            <div className="summary-details">
              <div className="amount-details">
                <div className="charges">
                  <div className="amount-wrapper">
                    <div className="amount">Amount</div>
                  </div>
                  <div className="delivery-charges-wrapper">
                    <div className="delivery-charges">Delivery charges</div>
                  </div>
                  <div className="service-charge">Service charge</div>
                </div>
                <div className="charges-values">
                  <div className="charge-values">$ 22</div>
                  <div className="charge-values1">$ 5</div>
                  <div className="charge-values2">$ 0.5</div>
                </div>
              </div>
            </div>
            <div className="line-group">
              <div className="frame-child3" />
              <div className="frame-wrapper2">
                <div className="total-parent">
                  <div className="total">Total</div>
                  <div className="total-value">$ 27.5</div>
                </div>
              </div>
            </div>
          </div>
          <div className="buy-now2">
            <div className="buy-now3">Buy Now</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
