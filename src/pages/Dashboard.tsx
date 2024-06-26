import { FunctionComponent } from "react";
import Table from "../components/Table";
import BorrowerNav from "../components/BorrowerNav";
import TopNav from "../components/TopNav";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.pagination}>
        <div className={styles.pageCounter}>
          <div className={styles.pageLabel}>
            <a className={styles.showing}>Showing</a>
          </div>
          <div className={styles.prevBtn}>
            <div className={styles.base} />
            <div className={styles.div}>100</div>
            <div className={styles.npNext22368260000002Wrapper}>
              <img
                className={styles.npNext22368260000002Icon}
                alt=""
                src="/np-next-2236826-000000-2@2x.png"
              />
            </div>
          </div>
          <div className={styles.pageLabel1}>
            <div className={styles.outOf100}>out of 100</div>
          </div>
        </div>
        <div className={styles.paginationContainer}>
          <div className={styles.div1}>
            <div className={styles.prevBtn1}>
              <div className={styles.pageBtnShapes} />
              <img
                className={styles.npNext22368260000002Icon1}
                loading="lazy"
                alt=""
                src="/np-next-2236826-000000-2-1.svg"
              />
            </div>
            <div className={styles.pageBtns}>
              <div className={styles.div2}>1</div>
            </div>
            <div className={styles.pageBtns1}>
              <div className={styles.div3}>2</div>
            </div>
            <div className={styles.pageBtns2}>
              <div className={styles.div4}>3</div>
            </div>
            <div className={styles.pageBtns3}>
              <div className={styles.div5}>...</div>
            </div>
            <div className={styles.pageBtns4}>
              <div className={styles.div6}>15</div>
            </div>
            <div className={styles.pageBtns5}>
              <div className={styles.div7}>16</div>
            </div>
            <div className={styles.nextBtn}>
              <div className={styles.nextBtnChild} />
              <img
                className={styles.npNext22368260000001Icon}
                loading="lazy"
                alt=""
                src="/np-next-2236826-000000-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Table />
      <div className={styles.content}>
        <div className={styles.base1} />
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        <div className={styles.usersWithSavings}>Users with Savings</div>
        <div className={styles.spacer}>102,453</div>
      </div>
      <div className={styles.content1}>
        <div className={styles.base2} />
        <img className={styles.icon1} loading="lazy" alt="" src="/icon-1.svg" />
        <div className={styles.usersWithLoans}>Users with Loans</div>
        <div className={styles.div8}>12,453</div>
      </div>
      <div className={styles.content2}>
        <div className={styles.base3} />
        <img className={styles.icon2} loading="lazy" alt="" src="/icon-2.svg" />
        <div className={styles.activeUsers}>Active Users</div>
        <div className={styles.div9}>2,453</div>
      </div>
      <div className={styles.content3}>
        <div className={styles.base4} />
        <img className={styles.icon3} loading="lazy" alt="" src="/icon-3.svg" />
        <a className={styles.users}>Users</a>
        <div className={styles.div10}>2,453</div>
      </div>
      <a className={styles.users1}>Users</a>
      <BorrowerNav />
      <TopNav />
    </div>
  );
};

export default Dashboard;
