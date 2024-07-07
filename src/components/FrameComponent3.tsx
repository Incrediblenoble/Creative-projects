import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FeatureList from "./FeatureList";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onAddToCartClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <section className={`product-container-wrapper ${className}`}>
      <div className="product-container1">
        <div className="product-details">
          <img
            className="product-image-icon1"
            loading="lazy"
            alt=""
            src="/rectangle-161@2x.png"
          />
          <div className="product-info">
            <div className="product-name-price">
              <h1 className="bluetooth-speaker">Bluetooth Speaker</h1>
              <div className="product-rating-cart">
                <div className="ratings-parent">
                  <img
                    className="ratings-icon"
                    loading="lazy"
                    alt=""
                    src="/ratings.svg"
                  />
                  <div className="rating-value">(28)</div>
                </div>
                <div className="price">$ 22</div>
              </div>
              <div className="cart-buttons">
                <div className="add-to-cart" onClick={onAddToCartClick}>
                  <div className="add-to-cart-child" />
                  <div className="add-to-cart1">Add to Cart</div>
                </div>
                <div className="buy-now">
                  <div className="buy-now-child" />
                  <div className="buy-now1">Buy Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-images">
          <div className="image-gallery">
            <div className="gallery-container">
              <div className="gallery-items">
                <div className="image-pairs">
                  <img
                    className="image-placeholder-one"
                    loading="lazy"
                    alt=""
                    src="/rectangle-181@2x.png"
                  />
                  <img
                    className="image-placeholder-two"
                    loading="lazy"
                    alt=""
                    src="/rectangle-201@2x.png"
                  />
                </div>
                <div className="image-pairs1">
                  <img
                    className="image-pairs-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-211@2x.png"
                  />
                  <img
                    className="image-pairs-item"
                    loading="lazy"
                    alt=""
                    src="/rectangle-221@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="product-features">
              <div className="feature-container">
                <FeatureList
                  gameIconsspeaker="/gameiconsspeaker.svg"
                  crystalClearAudio="Crystal-Clear Audio"
                />
              </div>
              <div className="battery-feature">
                <div className="battery-life-parent">
                  <div className="battery-life">
                    <div className="battery-icon-container">
                      <div className="entypobattery-wrapper">
                        <img
                          className="entypobattery-icon"
                          alt=""
                          src="/entypobattery.svg"
                        />
                      </div>
                      <div className="all-day-playtime">All-Day Playtime</div>
                    </div>
                  </div>
                  <div className="feature-separator-two" />
                </div>
              </div>
              <div className="connectivity-feature">
                <div className="connectivity-details-wrapper">
                  <div className="connectivity-details">
                    <div className="connectivity-icon-container">
                      <img
                        className="bibluetooth-icon"
                        alt=""
                        src="/bibluetooth.svg"
                      />
                    </div>
                    <div className="wireless-freedom">Wireless Freedom</div>
                  </div>
                </div>
                <div className="feature-separator-three" />
              </div>
              <FeatureList
                gameIconsspeaker="/mdiweights.svg"
                crystalClearAudio={`Compact & Rugged`}
                propFlex="unset"
                propAlignSelf="stretch"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
