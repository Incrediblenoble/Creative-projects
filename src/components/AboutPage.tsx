import { FunctionComponent, useCallback } from "react";
import "./AboutPage.css";

export type AboutPageType = {
  className?: string;
};

const AboutPage: FunctionComponent<AboutPageType> = ({ className = "" }) => {
  const onTextClick = useCallback(() => {
    window.open("https://api.whatsapp.com/send?phone=2348136456473");
  }, []);

  return (
    <footer className={`about-page2 ${className}`}>
      <div className="about-page3">
        <div className="about-page-inner" />
        <div className="customer-service2">
          <div className="customer-service-header1">
            <h2 className="customer-service3">Customer Service</h2>
          </div>
          <div className="service-hours2">
            <div className="service-hours-info">
              <div className="service-hours-wrapper">
                <div className="service-hours3">{`Service hours `}</div>
              </div>
              <div className="monday-to-friday2">
                Monday to Friday 9AM - 6PM
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-details">
                <div className="call-or-whatsapp2">Call or Whatsapp</div>
                <div className="phone-number2">
                  <div className="phone-number-value" onClick={onTextClick}>
                    0813-645-6470
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="email-info">
            <div className="email2">Email</div>
          </div>
          <div className="fortunastoregmailcom-wrapper">
            <div className="fortunastoregmailcom2">fortunastore@gmail.com</div>
          </div>
        </div>
        <div className="about-header-parent">
          <div className="about-header">
            <h2 className="about-us3">About us</h2>
          </div>
          <div className="fortuna-is-a2">
            Fortuna is a simple and user-friendly online store, focusing on a
            fast and streamlined shopping experience
          </div>
        </div>
        <div className="info-details-parent">
          <div className="info-details">
            <div className="links">
              <div className="link-labels">
                <h2 className="terms2">Terms</h2>
                <h2 className="our-physical-location2">
                  Our physical location
                </h2>
              </div>
            </div>
            <div className="delivery-guarantee">
              <div className="shipping1">
                <div className="free-shipping-over3">
                  Free Shipping over 15,000 in Ile-ife
                </div>
                <div className="obafemi-awolowo-universiy2">
                  Obafemi Awolowo Universiy, Ile-ife
                </div>
              </div>
              <div className="delivery-container1">
                <div className="fast-delivery3">Fast Delivery</div>
              </div>
              <div className="delivery-container2">
                <div className="days-guarantee3">90 Days Guarantee</div>
              </div>
            </div>
          </div>
          <img
            className="social-media-icon2"
            loading="lazy"
            alt=""
            src="/social-media.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default AboutPage;
