import { FunctionComponent } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.base} />
      <div className={styles.actionButtons}>
        <img
          className={styles.avatarIcon}
          loading="lazy"
          alt=""
          src="/avatar1.svg"
        />
        <div className={styles.actionButtonsInner}>
          <div className={styles.graceEffiomParent}>
            <h3 className={styles.graceEffiom}>Grace Effiom</h3>
            <div className={styles.lsqff587g90}>LSQFf587g90</div>
          </div>
        </div>
        <div className={styles.actionButtonsChild}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.usersTierParent}>
            <div className={styles.usersTier}>User’s Tier</div>
            <div className={styles.tierStars}>
              <img
                className={styles.npStar12080840000001Icon}
                loading="lazy"
                alt=""
                src="/np-star-1208084-000000-1.svg"
              />
              <img
                className={styles.npStar11711510000001Icon}
                loading="lazy"
                alt=""
                src="/np-star-1171151-000000-1.svg"
              />
              <img
                className={styles.npStar11711510000002Icon}
                loading="lazy"
                alt=""
                src="/np-star-1171151-000000-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.actionButtonsInner1}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.userTierStarsWrapper}>
          <div className={styles.userTierStars}>
            <div className={styles.div}>₦200,000.00</div>
            <div className={styles.providusBankWrapper}>
              <div className={styles.providusBank}>
                9912345678/Providus Bank
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.changeTierParent}>
        <div className={styles.changeTier}>Change Tier</div>
        <img
          className={styles.npNext22368260000002Icon}
          alt=""
          src="/np-next-2236826-000000-2@2x.png"
        />
      </div>
      <div className={styles.navigationItemsWrapper}>
        <div className={styles.navigationItems}>
          <div className={styles.documentButtonsWrapper}>
            <div className={styles.documentButtons}>
              <div className={styles.generalDetailsLink}>
                <div className={styles.generalDetails}>General Details</div>
              </div>
              <div className={styles.documents}>Documents</div>
              <div className={styles.bankDetails}>Bank Details</div>
              <div className={styles.loans}>Loans</div>
              <div className={styles.savingsLink}>
                <div className={styles.savings}>Savings</div>
                <div className={styles.appAndSystem}>App and System</div>
              </div>
            </div>
          </div>
          <div className={styles.line} />
        </div>
      </div>
    </section>
  );
};

export default Component;
