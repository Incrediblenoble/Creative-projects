import { FunctionComponent } from "react";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import BorrowerNav from "../components/BorrowerNav";
import TopNav from "../components/TopNav";
import styles from "./UsersGeneralDetails.module.css";

const UsersGeneralDetails: FunctionComponent = () => {
  return (
    <div className={styles.usersGeneralDetails}>
      <main className={styles.userDetailsParent}>
        <h3 className={styles.userDetails}>User Details</h3>
        <div className={styles.backToUsers}>Back to Users</div>
        <img
          className={styles.npBack30077500000001Icon}
          loading="lazy"
          alt=""
          src="/np-back-3007750-000000-1.svg"
        />
        <Component1 />
        <button className={styles.btn}>
          <div className={styles.base} />
          <div className={styles.dashboard}>Activate User</div>
        </button>
        <button className={styles.btn1}>
          <div className={styles.base1} />
          <div className={styles.dashboard1}>Blacklist User</div>
        </button>
        <Component />
        <BorrowerNav />
        <TopNav />
      </main>
      <div className={styles.pageTitleContainer}>
        <div className={styles.text}>{`     `}</div>
      </div>
    </div>
  );
};

export default UsersGeneralDetails;
