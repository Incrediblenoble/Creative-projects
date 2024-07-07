import { FunctionComponent } from "react";
import "./FrameComponent4.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={`fortuna-container ${className}`}>
      <header className="fortuna1">
        <div className="fortuna-item" />
        <div className="frame-group">
          <div className="fortuna-frame">
            <img
              className="fortuna-icon1"
              loading="lazy"
              alt=""
              src="/fortuna.svg"
            />
          </div>
          <div className="search-box-parent">
            <div className="search-box1">
              <div className="search-box-item" />
              <div className="search-wrapper">
                <a className="search1">Search...</a>
              </div>
              <img
                className="pajamassearch-icon1"
                alt=""
                src="/pajamassearch.svg"
              />
            </div>
            <div className="mdicart-outline-wrapper">
              <img
                className="mdicart-outline-icon1"
                loading="lazy"
                alt=""
                src="/mdicartoutline.svg"
              />
            </div>
            <div className="mingcuteuser-3-line-wrapper">
              <img
                className="mingcuteuser-3-line-icon1"
                loading="lazy"
                alt=""
                src="/mingcuteuser3line.svg"
              />
            </div>
          </div>
        </div>
        <div className="categories-wrapper">
          <div className="categories">
            <div className="category-icons">
              <div className="home-and-kitchen1">Home and Kitchen</div>
              <div className="weuiarrow-outlined-wrapper1">
                <img
                  className="weuiarrow-outlined-icon4"
                  alt=""
                  src="/weuiarrowoutlined@2x.png"
                />
              </div>
            </div>
            <div className="category-icons1">
              <div className="furniture1">Furniture</div>
              <div className="weuiarrow-outlined-wrapper2">
                <img
                  className="weuiarrow-outlined-icon5"
                  alt=""
                  src="/weuiarrowoutlined@2x.png"
                />
              </div>
            </div>
            <div className="category-icons2">
              <div className="electronics1">Electronics</div>
              <div className="weuiarrow-outlined-wrapper3">
                <img
                  className="weuiarrow-outlined-icon6"
                  alt=""
                  src="/weuiarrowoutlined-2@2x.png"
                />
              </div>
            </div>
            <div className="category-icons3">
              <div className="power-supplies1">Power Supplies</div>
              <div className="weuiarrow-outlined-wrapper4">
                <img
                  className="weuiarrow-outlined-icon7"
                  alt=""
                  src="/weuiarrowoutlined-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent4;
