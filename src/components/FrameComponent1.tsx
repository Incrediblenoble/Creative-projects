import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
  fORTUNA?: string;
  pajamassearch?: string;
  mdicartOutline?: string;
  mingcuteuser3Line?: string;
  weuiarrowOutlined?: string;
  weuiarrowOutlined1?: string;
  weuiarrowOutlined2?: string;
  weuiarrowOutlined3?: string;
  rectangle3?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  fORTUNA,
  pajamassearch,
  mdicartOutline,
  mingcuteuser3Line,
  weuiarrowOutlined,
  weuiarrowOutlined1,
  weuiarrowOutlined2,
  weuiarrowOutlined3,
  rectangle3,
}) => {
  return (
    <section className={`fortuna-parent ${className}`}>
      <header className="fortuna">
        <div className="fortuna-child" />
        <div className="frame-parent">
          <div className="fortuna-wrapper">
            <img className="fortuna-icon" loading="lazy" alt="" src={fORTUNA} />
          </div>
          <div className="user-action-container">
            <div className="search-box">
              <div className="search-box-child" />
              <div className="search-input-container">
                <a className="search">Search...</a>
              </div>
              <img className="pajamassearch-icon" alt="" src={pajamassearch} />
            </div>
            <div className="cart-user-container">
              <img
                className="mdicart-outline-icon"
                loading="lazy"
                alt=""
                src={mdicartOutline}
              />
            </div>
            <div className="cart-user-container1">
              <img
                className="mingcuteuser-3-line-icon"
                loading="lazy"
                alt=""
                src={mingcuteuser3Line}
              />
            </div>
          </div>
        </div>
        <div className="navigation-container">
          <div className="category-container">
            <div className="category-name-container">
              <div className="home-and-kitchen">Home and Kitchen</div>
              <div className="category-icon-container">
                <img
                  className="weuiarrow-outlined-icon"
                  alt=""
                  src={weuiarrowOutlined}
                />
              </div>
            </div>
            <div className="category-name-container1">
              <div className="furniture">Furniture</div>
              <div className="weuiarrow-outlined-wrapper">
                <img
                  className="weuiarrow-outlined-icon1"
                  alt=""
                  src={weuiarrowOutlined1}
                />
              </div>
            </div>
            <div className="category-name-container2">
              <div className="electronics">Electronics</div>
              <div className="weuiarrow-outlined-container">
                <img
                  className="weuiarrow-outlined-icon2"
                  alt=""
                  src={weuiarrowOutlined2}
                />
              </div>
            </div>
            <div className="category-name-container3">
              <div className="power-supplies">Power Supplies</div>
              <div className="weuiarrow-outlined-frame">
                <img
                  className="weuiarrow-outlined-icon3"
                  alt=""
                  src={weuiarrowOutlined3}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="landing-page">
        <div className="rectangle-group">
          <img className="frame-item" loading="lazy" alt="" src={rectangle3} />
          <div className="frame-inner" />
        </div>
        <h1 className="your-one-stop">Your one stop shopping experience</h1>
        <div className="appliance-description">
          <b className="for-all-your">For all your home appliances</b>
          <b className="no-matter-your">no matter your location</b>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
