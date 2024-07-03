import { FunctionComponent } from "react";
import "./Login.css";

const Login: FunctionComponent = () => {
  return (
    <div className="login">
      <div className="left-content">
        <div className="bg" />
        <div className="frame-parent7">
          <div className="gounlimi-parent">
            <h1 className="gounlimi">GoUnlimi</h1>
            <div className="the-most-popular">
              The most popular peer to peer lending at SEA
            </div>
          </div>
          <div className="read-more-wrapper">
            <a className="read-more">Read More</a>
          </div>
        </div>
        <div className="left-content-inner">
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-2.svg"
          />
        </div>
      </div>
      <div className="login-form">
        <div className="hello-again-parent">
          <h2 className="hello-again">Hello Again!</h2>
          <div className="welcome-back-wrapper">
            <div className="welcome-back">Welcome Back</div>
          </div>
          <div className="email-wrapper">
            <div className="email">
              <img
                className="codiconmail"
                loading="lazy"
                alt=""
                src="/codiconmail.svg"
              />
              <div className="email-address-wrapper">
                <div className="email-address">Email Address</div>
              </div>
            </div>
          </div>
          <div className="password-wrapper">
            <div className="password">
              <img
                className="bxbxs-lock-alt-icon"
                loading="lazy"
                alt=""
                src="/bxbxslockalt.svg"
              />
              <div className="password-container">
                <div className="password1">Password</div>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <div className="button">
              <div className="login1">Login</div>
            </div>
          </div>
          <div className="forgot-password-wrapper">
            <div className="forgot-password">Forgot Password</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
