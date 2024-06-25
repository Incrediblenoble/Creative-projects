import { FunctionComponent } from "react";
import "./TopNav.css";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  return (
    <header className={`top-nav ${className}`}>
      <div className="wrapper-union">
        <img className="union-icon" alt="" src="/union.svg" />
      </div>
      <div className="top-nav-right">
        <div className="top-nav-right-content">
          <div className="logo-search">
            <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          </div>
          <div className="search">
            <div className="search-input" />
            <input
              className="search-child"
              placeholder="Search for anything"
              type="text"
            />
            <div className="search-icon">
              <img
                className="search-icon-child"
                alt=""
                src="/rectangle-9.svg"
              />
              <img className="icon5" alt="" src="/icon1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="docs-notifications-avatar">
        <div className="docs-wrapper">
          <a className="docs">Docs</a>
        </div>
        <div className="notifications">
          <img
            className="np-notification-2425223-000000-icon"
            loading="lazy"
            alt=""
            src="/np-notification-2425223-000000-1.svg"
          />
        </div>
        <div className="avatar-dropdown">
          <img
            className="avatar-icon"
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
          <div className="company-name-dropdown">
            <div className="company-name-wrapper">
              <a className="company-name">Adedeji</a>
              <img
                className="np-dropdown-615120-000000-1-icon"
                alt=""
                src="/np-dropdown-615120-000000-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
