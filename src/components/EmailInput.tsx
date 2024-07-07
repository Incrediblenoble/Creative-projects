import { FunctionComponent } from "react";
import "./EmailInput.css";

export type EmailInputType = {
  className?: string;
  zondiconsnotification?: string;
};

const EmailInput: FunctionComponent<EmailInputType> = ({
  className = "",
  zondiconsnotification,
}) => {
  return (
    <section className={`email-input ${className}`}>
      <div className="email-box">
        <div className="placeholder">
          <div className="enter-your-email">Enter your email address</div>
        </div>
        <div className="email-box-child" />
        <div className="notification">
          <div className="notification-child" />
          <img
            className="zondiconsnotification"
            alt=""
            src={zondiconsnotification}
          />
        </div>
      </div>
    </section>
  );
};

export default EmailInput;
