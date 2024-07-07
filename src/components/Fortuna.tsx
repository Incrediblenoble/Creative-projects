import { FunctionComponent } from "react";
import "./Fortuna.css";

export type FortunaType = {
  className?: string;
};

const Fortuna: FunctionComponent<FortunaType> = ({ className = "" }) => {
  return (
    <div className={`fortuna2 ${className}`}>
      <div className="fortuna-inner" />
      <div className="div2">1</div>
      <div className="fortuna-child1" />
      <header className="frame-container">
        <div className="fortuna-wrapper1">
          <img
            className="fortuna-icon2"
            loading="lazy"
            alt=""
            src="/fortuna.svg"
          />
        </div>
        <div className="search-box-group">
          <div className="search-box2">
            <div className="search-box-inner" />
            <div className="search-container">
              <a className="search2">Search...</a>
            </div>
            <img
              className="pajamassearch-icon2"
              alt=""
              src="/pajamassearch.svg"
            />
          </div>
          <div className="frame-wrapper">
            <div className="frame-parent1">
              <div className="frame-wrapper1">
                <div className="user-icon-parent">
                  <img
                    className="user-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <a className="user-name">1</a>
                </div>
              </div>
              <img
                className="mingcuteuser-3-line-icon2"
                loading="lazy"
                alt=""
                src="/mingcuteuser3line.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="navigation">
        <div className="categories1">
          <div className="category-items">
            <div className="home-and-kitchen2">Home and Kitchen</div>
            <div className="weuiarrow-outlined-wrapper5">
              <img
                className="weuiarrow-outlined-icon8"
                alt=""
                src="/weuiarrowoutlined-2@2x.png"
              />
            </div>
          </div>
          <div className="category-items1">
            <div className="furniture2">Furniture</div>
            <div className="weuiarrow-outlined-wrapper6">
              <img
                className="weuiarrow-outlined-icon9"
                alt=""
                src="/weuiarrowoutlined-2@2x.png"
              />
            </div>
          </div>
          <div className="category-items2">
            <div className="electronics2">Electronics</div>
            <div className="weuiarrow-outlined-wrapper7">
              <img
                className="weuiarrow-outlined-icon10"
                alt=""
                src="/weuiarrowoutlined-2@2x.png"
              />
            </div>
          </div>
          <div className="category-items3">
            <div className="power-supplies2">Power Supplies</div>
            <div className="weuiarrow-outlined-wrapper8">
              <img
                className="weuiarrow-outlined-icon11"
                alt=""
                src="/weuiarrowoutlined-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fortuna;
