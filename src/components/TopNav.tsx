import { FunctionComponent } from "react";
import styles from "./TopNav.module.css";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  return (
    <header className={[styles.topNav, className].join(" ")}>
      <div className={styles.wrapperUnion}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
      </div>
      <div className={styles.topNavRight}>
        <div className={styles.topNavRightContent}>
          <div className={styles.logoSearch}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className={styles.search}>
            <div className={styles.searchInput} />
            <input
              className={styles.searchChild}
              placeholder="Search for anything"
              type="text"
            />
            <div className={styles.searchIcon}>
              <img
                className={styles.searchIconChild}
                alt=""
                src="/rectangle-9.svg"
              />
              <img className={styles.icon} alt="" src="/icon1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.docsNotificationsAvatar}>
        <div className={styles.docsWrapper}>
          <a className={styles.docs}>Docs</a>
        </div>
        <div className={styles.notifications}>
          <img
            className={styles.npNotification2425223000000Icon}
            loading="lazy"
            alt=""
            src="/np-notification-2425223-000000-1.svg"
          />
        </div>
        <div className={styles.avatarDropdown}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
          <div className={styles.companyNameDropdown}>
            <div className={styles.companyNameWrapper}>
              <a className={styles.companyName}>Adedeji</a>
              <img
                className={styles.npDropdown6151200000001Icon}
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
