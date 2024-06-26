import { FunctionComponent } from "react";
import styles from "./TopNav1.module.css";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  return (
    <header className={[styles.topNav, className].join(" ")}>
      <div className={styles.wrapperUnion}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
      </div>
      <div className={styles.topNavigationContent}>
        <div className={styles.userActions}>
          <div className={styles.userDropdown}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className={styles.search}>
            <div className={styles.searchInputBackground} />
            <input
              className={styles.searchPlaceholder}
              placeholder="Search for anything"
              type="text"
            />
            <div className={styles.searchIconContainer}>
              <img
                className={styles.searchIconContainerChild}
                alt=""
                src="/rectangle-9.svg"
              />
              <img
                className={styles.searchIconHandle}
                alt=""
                src="/icon1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userProfile}>
        <div className={styles.notificationButton}>
          <a className={styles.docs}>Docs</a>
        </div>
        <div className={styles.companyDetails}>
          <img
            className={styles.npNotification2425223000000Icon}
            loading="lazy"
            alt=""
            src="/np-notification-2425223-000000-1.svg"
          />
        </div>
        <div className={styles.avatarParent}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
          <div className={styles.docsButton}>
            <div className={styles.companyNameContainer}>
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
