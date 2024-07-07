import { FunctionComponent, useCallback } from "react";
import EmailInput from "./EmailInput";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const onTextClick = useCallback(() => {
    window.open("https://api.whatsapp.com/send?phone=2348136456473");
  }, []);

  return (
    <section className={`about-page-parent ${className}`}>
      <footer className="about-page1">
        <div className="about-page-item" />
        <div className="customer-service-details-parent">
          <div className="customer-service-details">
            <h2 className="customer-service1">Customer Service</h2>
          </div>
          <div className="service-hours-details-parent">
            <div className="service-hours-details">
              <div className="service-hours1">{`Service hours `}</div>
            </div>
            <div className="service-hours-container1">
              <div className="monday-to-friday1">
                Monday to Friday 9AM - 6PM
              </div>
              <div className="call-container">
                <div className="call-details">
                  <div className="call-or-whatsapp1">Call or Whatsapp</div>
                  <div className="phone-number1">
                    <div className="email-container1" onClick={onTextClick}>
                      0813-645-6470
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-container">
            <div className="about-details">
              <div className="about-title">
                <div className="email1">Email</div>
              </div>
              <div className="fortunastoregmailcom1">
                fortunastore@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="location-container">
          <div className="location-details">
            <h2 className="about-us2">About us</h2>
          </div>
          <div className="fortuna-is-a1">
            Fortuna is a simple and user-friendly online store, focusing on a
            fast and streamlined shopping experience
          </div>
        </div>
        <div className="shipping-container1">
          <div className="shipping-details">
            <div className="shipping-options">
              <div className="shipping-types">
                <h2 className="terms1">Terms</h2>
                <h2 className="our-physical-location1">
                  Our physical location
                </h2>
              </div>
            </div>
            <div className="shipping-location">
              <div className="free-shipping-over2">
                Free Shipping over 15,000 in Ile-ife
              </div>
              <div className="obafemi-awolowo-universiy1">
                Obafemi Awolowo Universiy, Ile-ife
              </div>
            </div>
            <div className="delivery-container">
              <div className="delivery-details">
                <div className="delivery-options">
                  <div className="fast-delivery2">Fast Delivery</div>
                </div>
                <div className="days-guarantee2">90 Days Guarantee</div>
              </div>
            </div>
          </div>
          <img
            className="social-media-icon1"
            loading="lazy"
            alt=""
            src="/social-media.svg"
          />
        </div>
      </footer>
      <div className="newsletter-container">
        <h1 className="join-our-newsletter2">Join Our Newsletter</h1>
      </div>
      <EmailInput zondiconsnotification="/zondiconsnotification.svg" />
    </section>
  );
};

export default FrameComponent2;
