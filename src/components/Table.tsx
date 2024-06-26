import { FunctionComponent } from "react";
import styles from "./Table.module.css";

export type TableType = {
  className?: string;
};

const Table: FunctionComponent<TableType> = ({ className = "" }) => {
  return (
    <section className={[styles.table, className].join(" ")}>
      <div className={styles.base} />
      <div className={styles.filterBar}>
        <div className={styles.filterInputs}>
          <div className={styles.filterLabels}>
            <div className={styles.organization}>organization</div>
            <img
              className={styles.filterResultsButtonIcon}
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
          <div className={styles.filterLabels1}>
            <div className={styles.username}>Username</div>
            <img
              className={styles.filterResultsButtonIcon1}
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
          <div className={styles.filterLabels2}>
            <div className={styles.email}>Email</div>
            <img
              className={styles.filterResultsButtonIcon2}
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.phoneNumberParent}>
            <div className={styles.phoneNumber}>Phone number</div>
            <img
              className={styles.filterResultsButtonIcon3}
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
          <div className={styles.dateJoinedParent}>
            <div className={styles.dateJoined}>Date joined</div>
            <img
              className={styles.filterResultsButtonIcon4}
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
        </div>
        <div className={styles.statusFilter}>
          <div className={styles.status}>Status</div>
          <img
            className={styles.filterResultsButtonIcon5}
            alt=""
            src="/filterresultsbutton.svg"
          />
        </div>
      </div>
      <div className={styles.tableHeaders}>
        <div className={styles.orgNameHeader}>
          <div className={styles.lendsqr}>Lendsqr</div>
        </div>
        <div className={styles.userNameHeader}>
          <div className={styles.adedeji}>Adedeji</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.adedejilendsqrcomWrapper}>
            <div className={styles.adedejilendsqrcom}>adedeji@lendsqr.com</div>
          </div>
          <div className={styles.inactivePillWrapper}>
            <div className={styles.inactivePill}>08078903721</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.may1520201000AmWrapper}>
              <div className={styles.may152020}>May 15, 2020 10:00 AM</div>
            </div>
            <div className={styles.inactivePill1}>
              <div className={styles.inactivePillChild} />
              <div className={styles.inactive}>Inactive</div>
            </div>
          </div>
          <div className={styles.icMoreVert18pxWrapper}>
            <img
              className={styles.icMoreVert18pxIcon}
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeaders1} />
      <div className={styles.tableHeaders2}>
        <div className={styles.irorunWrapper}>
          <div className={styles.irorun}>Irorun</div>
        </div>
        <div className={styles.nestedUserEmailsParent}>
          <div className={styles.nestedUserEmails}>
            <div className={styles.debbyOgana}>Debby Ogana</div>
          </div>
          <div className={styles.nestedUserEmails1}>
            <div className={styles.debby2iroruncom}>debby2@irorun.com</div>
          </div>
          <div className={styles.emptyDateJoined}>
            <div className={styles.emptyDateJoined1}>08160780928</div>
          </div>
          <div className={styles.dateJoinedHeader}>
            <div className={styles.apr302020}>Apr 30, 2020 10:00 AM</div>
          </div>
          <div className={styles.userStatusHeader}>
            <button className={styles.pendingPill}>
              <div className={styles.pendingPillShape} />
              <div className={styles.pending}>Pending</div>
            </button>
          </div>
          <div className={styles.moreOptionsHeader}>
            <img
              className={styles.icMoreVert18pxIcon1}
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeaders3} />
      <div className={styles.tableHeaders4}>
        <div className={styles.lendstarWrapper}>
          <div className={styles.lendstar}>Lendstar</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.graceEffiomWrapper}>
            <div className={styles.graceEffiom}>Grace Effiom</div>
          </div>
          <div className={styles.gracelendstarcomWrapper}>
            <div className={styles.gracelendstarcom}>grace@lendstar.com</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div}>07060780922</div>
          </div>
          <div className={styles.apr3020201000AmWrapper}>
            <div className={styles.apr3020201}>Apr 30, 2020 10:00 AM</div>
          </div>
          <div className={styles.blacklistedPill}>
            <div className={styles.blacklistedPillChild} />
            <div className={styles.blacklisted}>Blacklisted</div>
          </div>
          <div className={styles.icMoreVert18pxContainer}>
            <img
              className={styles.icMoreVert18pxIcon2}
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeaders5} />
      <div className={styles.tableHeaders6}>
        <div className={styles.lendsqrWrapper}>
          <div className={styles.lendsqr1}>Lendsqr</div>
        </div>
        <div className={styles.tosinDokunmuWrapper}>
          <div className={styles.tosinDokunmu}>Tosin Dokunmu</div>
        </div>
        <div className={styles.tosinlendsqrcomWrapper}>
          <div className={styles.tosinlendsqrcom}>tosin@lendsqr.com</div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.container}>
            <div className={styles.div1}>07003309226</div>
          </div>
          <div className={styles.apr1020201000AmWrapper}>
            <div className={styles.apr102020}>Apr 10, 2020 10:00 AM</div>
          </div>
          <div className={styles.pendingPillParent}>
            <button className={styles.pendingPill1}>
              <div className={styles.pendingPillChild} />
              <div className={styles.pending1}>Pending</div>
            </button>
            <div className={styles.icMoreVert18pxFrame}>
              <img
                className={styles.icMoreVert18pxIcon3}
                loading="lazy"
                alt=""
                src="/icmorevert18px.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableHeaders7} />
      <div className={styles.tableHeaders8}>
        <div className={styles.lendstarContainer}>
          <div className={styles.lendstar1}>Lendstar</div>
        </div>
        <div className={styles.graceEffiomContainer}>
          <div className={styles.graceEffiom1}>Grace Effiom</div>
        </div>
        <div className={styles.gracelendstarcomContainer}>
          <div className={styles.gracelendstarcom1}>grace@lendstar.com</div>
        </div>
        <div className={styles.frame}>
          <div className={styles.div2}>07060780922</div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.apr3020201000AmContainer}>
            <div className={styles.apr3020202}>Apr 30, 2020 10:00 AM</div>
          </div>
          <div className={styles.activePill}>
            <div className={styles.activePillChild} />
            <div className={styles.active}>Active</div>
          </div>
        </div>
        <div className={styles.lastRowMoreOptions}>
          <img
            className={styles.icMoreVert18pxIcon4}
            loading="lazy"
            alt=""
            src="/icmorevert18px.svg"
          />
        </div>
      </div>
      <div className={styles.tableHeaders9} />
      <div className={styles.tableHeaders10}>
        <div className={styles.lendsqrContainer}>
          <div className={styles.lendsqr2}>Lendsqr</div>
        </div>
        <div className={styles.tableHeadersInner}>
          <div className={styles.tosinDokunmuParent}>
            <div className={styles.tosinDokunmu1}>Tosin Dokunmu</div>
            <div className={styles.tosinlendsqrcom1}>tosin@lendsqr.com</div>
          </div>
        </div>
        <div className={styles.wrapper1}>
          <div className={styles.div3}>08060780900</div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.apr1020201000AmContainer}>
            <div className={styles.apr1020201}>Apr 10, 2020 10:00 AM</div>
          </div>
          <div className={styles.activePillWrapper}>
            <div className={styles.activePill1}>
              <div className={styles.activePillItem} />
              <div className={styles.active1}>Active</div>
            </div>
          </div>
          <div className={styles.icMoreVert18pxWrapper1}>
            <img
              className={styles.icMoreVert18pxIcon5}
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeaders11} />
      <div className={styles.tableHeaders12}>
        <div className={styles.lendstarFrame}>
          <div className={styles.lendstar2}>Lendstar</div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.graceEffiomFrame}>
            <div className={styles.graceEffiom2}>Grace Effiom</div>
          </div>
          <div className={styles.gracelendstarcomFrame}>
            <div className={styles.gracelendstarcom2}>grace@lendstar.com</div>
          </div>
          <div className={styles.wrapper2}>
            <div className={styles.div4}>07060780922</div>
          </div>
          <div className={styles.apr3020201000AmFrame}>
            <div className={styles.apr3020203}>Apr 30, 2020 10:00 AM</div>
          </div>
          <div className={styles.blacklistedPill1}>
            <div className={styles.blacklistedPillItem} />
            <div className={styles.blacklisted1}>Blacklisted</div>
          </div>
          <div className={styles.icMoreVert18pxWrapper2}>
            <img
              className={styles.icMoreVert18pxIcon6}
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeaders13} />
      <div className={styles.tableHeaders14}>
        <div className={styles.lendsqrFrame}>
          <div className={styles.lendsqr3}>Lendsqr</div>
        </div>
        <div className={styles.tosinDokunmuContainer}>
          <div className={styles.tosinDokunmu2}>Tosin Dokunmu</div>
        </div>
        <div className={styles.tosinlendsqrcomContainer}>
          <div className={styles.tosinlendsqrcom2}>tosin@lendsqr.com</div>
        </div>
        <div className={styles.wrapper3}>
          <div className={styles.div5}>08060780900</div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.apr1020201000AmFrame}>
            <div className={styles.apr1020202}>Apr 10, 2020 10:00 AM</div>
          </div>
          <div className={styles.inactivePillContainer}>
            <div className={styles.inactivePill2}>
              <div className={styles.inactivePillItem} />
              <div className={styles.inactive1}>Inactive</div>
            </div>
          </div>
          <div className={styles.icMoreVert18pxWrapper3}>
            <img
              className={styles.icMoreVert18pxIcon7}
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeaders15} />
      <div className={styles.tableHeaders16}>
        <div className={styles.lendstarWrapper1}>
          <div className={styles.lendstar3}>Lendstar</div>
        </div>
        <div className={styles.tableHeadersChild}>
          <div className={styles.frameParent6}>
            <div className={styles.graceEffiomWrapper1}>
              <div className={styles.graceEffiom3}>Grace Effiom</div>
            </div>
            <div className={styles.gracelendstarcom3}>grace@lendstar.com</div>
            <div className={styles.emptyUserEmail}>07060780922</div>
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.apr3020201000AmWrapper1}>
            <div className={styles.apr3020204}>Apr 30, 2020 10:00 AM</div>
          </div>
          <div className={styles.inactivePillFrame}>
            <div className={styles.inactivePill3}>
              <div className={styles.inactivePillShape} />
              <div className={styles.inactive2}>Inactive</div>
            </div>
          </div>
          <div className={styles.icMoreVert18pxWrapper4}>
            <img
              className={styles.icMoreVert18pxIcon8}
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
