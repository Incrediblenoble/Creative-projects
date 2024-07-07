import { FunctionComponent } from "react";
import "./NewsletterContainer.css";

export type NewsletterContainerType = {
  className?: string;
};

const NewsletterContainer: FunctionComponent<NewsletterContainerType> = ({
  className = "",
}) => {
  return (
    <section className={`newsletter-container1 ${className}`}>
      <div className="newsletter1">
        <div className="newsletter-title">
          <h1 className="join-our-newsletter3">Join Our Newsletter</h1>
        </div>
        <div className="email-box1">
          <div className="email-input1">
            <div className="enter-your-email1">Enter your email address</div>
          </div>
          <div className="email-box-item" />
          <div className="notification-icon">
            <div className="notification-icon-child" />
            <img
              className="zondiconsnotification1"
              alt=""
              src="/zondiconsnotification.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterContainer;
