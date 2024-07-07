import { FunctionComponent, useCallback } from "react";
import "./About.css";

export type AboutType = {
  className?: string;
  socialMedia?: string;
};

const About: FunctionComponent<AboutType> = ({
  className = "",
  socialMedia,
}) => {
  const onTextClick = useCallback(() => {
    window.open("https://api.whatsapp.com/send?phone=2348136456473");
  }, []);

  return (
    <section className={`about ${className}`}>
      <footer className="about-page">
        <div className="about-page-child" />
        <div className="customer-service-container">
          <div className="customer-service-header">
            <b className="customer-service">Customer Service</b>
          </div>
          <div className="service-hours-container">
            <div className="service-hours-header">
              <div className="service-hours">{`Service hours `}</div>
            </div>
            <div className="service-hours-detail">
              <div className="monday-to-friday">Monday to Friday 9AM - 6PM</div>
              <div className="contact-container">
                <div className="contact-header">
                  <div className="call-or-whatsapp">Call or Whatsapp</div>
                  <div className="phone-number">
                    <div className="div1" onClick={onTextClick}>
                      0813-645-6473
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="email-container">
            <div className="email-header">
              <div className="email-wrapper">
                <div className="email">Email</div>
              </div>
              <div className="fortunastoregmailcom">fortunastore@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <div className="about-us-header">
            <b className="about-us1">About us</b>
          </div>
          <div className="fortuna-is-a">
            Fortuna is a simple and user-friendly online store, focusing on a
            fast and streamlined shopping experience
          </div>
        </div>
        <div className="store-info">
          <div className="store-details">
            <div className="location-and-terms">
              <div className="location">
                <b className="terms">Terms</b>
                <b className="our-physical-location">Our physical location</b>
              </div>
            </div>
            <div className="delivery">
              <div className="shipping">
                <div className="free-shipping-over1">
                  Free Shipping over 15,000 in Ile-ife
                </div>
                <div className="obafemi-awolowo-universiy">
                  Obafemi Awolowo Universiy, Ile-ife
                </div>
              </div>
              <div className="delivery-types">
                <div className="fast-delivery1">Fast Delivery</div>
              </div>
              <div className="delivery-types1">
                <div className="days-guarantee1">90 Days Guarantee</div>
              </div>
            </div>
          </div>
          <img
            className="social-media-icon"
            loading="lazy"
            alt=""
            src={socialMedia}
          />
        </div>
      </footer>
    </section>
  );
};

export default About;
