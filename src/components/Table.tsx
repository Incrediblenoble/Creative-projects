import { FunctionComponent } from "react";
import "./Table.css";

export type TableType = {
  className?: string;
};

const Table: FunctionComponent<TableType> = ({ className = "" }) => {
  return (
    <section className={`table ${className}`}>
      <div className="base5" />
      <div className="filter-bar">
        <div className="filter-inputs">
          <div className="filter-labels">
            <div className="organization">organization</div>
            <img
              className="filter-results-button-icon"
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
          <div className="filter-labels1">
            <div className="username">Username</div>
            <img
              className="filter-results-button-icon1"
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
          <div className="filter-labels2">
            <div className="email">Email</div>
            <img
              className="filter-results-button-icon2"
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
        </div>
        <div className="frame-parent">
          <div className="phone-number-parent">
            <div className="phone-number">Phone number</div>
            <img
              className="filter-results-button-icon3"
              loading="lazy"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
          <div className="date-joined-parent">
            <div className="date-joined">Date joined</div>
            <img
              className="filter-results-button-icon4"
              alt=""
              src="/filterresultsbutton.svg"
            />
          </div>
        </div>
        <div className="status-filter">
          <div className="status">Status</div>
          <img
            className="filter-results-button-icon5"
            alt=""
            src="/filterresultsbutton.svg"
          />
        </div>
      </div>
      <div className="table-headers">
        <div className="org-name-header">
          <div className="lendsqr">Lendsqr</div>
        </div>
        <div className="user-name-header">
          <div className="adedeji">Adedeji</div>
        </div>
        <div className="frame-group">
          <div className="adedejilendsqrcom-wrapper">
            <div className="adedejilendsqrcom">adedeji@lendsqr.com</div>
          </div>
          <div className="inactive-pill-wrapper">
            <div className="inactive-pill">08078903721</div>
          </div>
          <div className="frame-container">
            <div className="may-15-2020-1000-am-wrapper">
              <div className="may-15-2020">May 15, 2020 10:00 AM</div>
            </div>
            <div className="inactive-pill1">
              <div className="inactive-pill-child" />
              <div className="inactive">Inactive</div>
            </div>
          </div>
          <div className="ic-more-vert-18px-wrapper">
            <img
              className="ic-more-vert-18px-icon"
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className="table-headers1" />
      <div className="table-headers2">
        <div className="irorun-wrapper">
          <div className="irorun">Irorun</div>
        </div>
        <div className="nested-user-emails-parent">
          <div className="nested-user-emails">
            <div className="debby-ogana">Debby Ogana</div>
          </div>
          <div className="nested-user-emails1">
            <div className="debby2iroruncom">debby2@irorun.com</div>
          </div>
          <div className="empty-date-joined">
            <div className="empty-date-joined1">08160780928</div>
          </div>
          <div className="date-joined-header">
            <div className="apr-30-2020">Apr 30, 2020 10:00 AM</div>
          </div>
          <div className="user-status-header">
            <button className="pending-pill">
              <div className="pending-pill-shape" />
              <div className="pending">Pending</div>
            </button>
          </div>
          <div className="more-options-header">
            <img
              className="ic-more-vert-18px-icon1"
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className="table-headers3" />
      <div className="table-headers4">
        <div className="lendstar-wrapper">
          <div className="lendstar">Lendstar</div>
        </div>
        <div className="frame-div">
          <div className="grace-effiom-wrapper">
            <div className="grace-effiom">Grace Effiom</div>
          </div>
          <div className="gracelendstarcom-wrapper">
            <div className="gracelendstarcom">grace@lendstar.com</div>
          </div>
          <div className="wrapper">
            <div className="div11">07060780922</div>
          </div>
          <div className="apr-30-2020-1000-am-wrapper">
            <div className="apr-30-20201">Apr 30, 2020 10:00 AM</div>
          </div>
          <div className="blacklisted-pill">
            <div className="blacklisted-pill-child" />
            <div className="blacklisted">Blacklisted</div>
          </div>
          <div className="ic-more-vert-18px-container">
            <img
              className="ic-more-vert-18px-icon2"
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className="table-headers5" />
      <div className="table-headers6">
        <div className="lendsqr-wrapper">
          <div className="lendsqr1">Lendsqr</div>
        </div>
        <div className="tosin-dokunmu-wrapper">
          <div className="tosin-dokunmu">Tosin Dokunmu</div>
        </div>
        <div className="tosinlendsqrcom-wrapper">
          <div className="tosinlendsqrcom">tosin@lendsqr.com</div>
        </div>
        <div className="frame-parent1">
          <div className="container">
            <div className="div12">07003309226</div>
          </div>
          <div className="apr-10-2020-1000-am-wrapper">
            <div className="apr-10-2020">Apr 10, 2020 10:00 AM</div>
          </div>
          <div className="pending-pill-parent">
            <button className="pending-pill1">
              <div className="pending-pill-child" />
              <div className="pending1">Pending</div>
            </button>
            <div className="ic-more-vert-18px-frame">
              <img
                className="ic-more-vert-18px-icon3"
                loading="lazy"
                alt=""
                src="/icmorevert18px.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="table-headers7" />
      <div className="table-headers8">
        <div className="lendstar-container">
          <div className="lendstar1">Lendstar</div>
        </div>
        <div className="grace-effiom-container">
          <div className="grace-effiom1">Grace Effiom</div>
        </div>
        <div className="gracelendstarcom-container">
          <div className="gracelendstarcom1">grace@lendstar.com</div>
        </div>
        <div className="frame">
          <div className="div13">07060780922</div>
        </div>
        <div className="frame-parent2">
          <div className="apr-30-2020-1000-am-container">
            <div className="apr-30-20202">Apr 30, 2020 10:00 AM</div>
          </div>
          <div className="active-pill">
            <div className="active-pill-child" />
            <div className="active">Active</div>
          </div>
        </div>
        <div className="last-row-more-options">
          <img
            className="ic-more-vert-18px-icon4"
            loading="lazy"
            alt=""
            src="/icmorevert18px.svg"
          />
        </div>
      </div>
      <div className="table-headers9" />
      <div className="table-headers10">
        <div className="lendsqr-container">
          <div className="lendsqr2">Lendsqr</div>
        </div>
        <div className="table-headers-inner">
          <div className="tosin-dokunmu-parent">
            <div className="tosin-dokunmu1">Tosin Dokunmu</div>
            <div className="tosinlendsqrcom1">tosin@lendsqr.com</div>
          </div>
        </div>
        <div className="wrapper1">
          <div className="div14">08060780900</div>
        </div>
        <div className="frame-parent3">
          <div className="apr-10-2020-1000-am-container">
            <div className="apr-10-20201">Apr 10, 2020 10:00 AM</div>
          </div>
          <div className="active-pill-wrapper">
            <div className="active-pill1">
              <div className="active-pill-item" />
              <div className="active1">Active</div>
            </div>
          </div>
          <div className="ic-more-vert-18px-wrapper1">
            <img
              className="ic-more-vert-18px-icon5"
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className="table-headers11" />
      <div className="table-headers12">
        <div className="lendstar-frame">
          <div className="lendstar2">Lendstar</div>
        </div>
        <div className="frame-parent4">
          <div className="grace-effiom-frame">
            <div className="grace-effiom2">Grace Effiom</div>
          </div>
          <div className="gracelendstarcom-frame">
            <div className="gracelendstarcom2">grace@lendstar.com</div>
          </div>
          <div className="wrapper2">
            <div className="div15">07060780922</div>
          </div>
          <div className="apr-30-2020-1000-am-frame">
            <div className="apr-30-20203">Apr 30, 2020 10:00 AM</div>
          </div>
          <div className="blacklisted-pill1">
            <div className="blacklisted-pill-item" />
            <div className="blacklisted1">Blacklisted</div>
          </div>
          <div className="ic-more-vert-18px-wrapper2">
            <img
              className="ic-more-vert-18px-icon6"
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className="table-headers13" />
      <div className="table-headers14">
        <div className="lendsqr-frame">
          <div className="lendsqr3">Lendsqr</div>
        </div>
        <div className="tosin-dokunmu-container">
          <div className="tosin-dokunmu2">Tosin Dokunmu</div>
        </div>
        <div className="tosinlendsqrcom-container">
          <div className="tosinlendsqrcom2">tosin@lendsqr.com</div>
        </div>
        <div className="wrapper3">
          <div className="div16">08060780900</div>
        </div>
        <div className="frame-parent5">
          <div className="apr-10-2020-1000-am-frame">
            <div className="apr-10-20202">Apr 10, 2020 10:00 AM</div>
          </div>
          <div className="inactive-pill-container">
            <div className="inactive-pill2">
              <div className="inactive-pill-item" />
              <div className="inactive1">Inactive</div>
            </div>
          </div>
          <div className="ic-more-vert-18px-wrapper3">
            <img
              className="ic-more-vert-18px-icon7"
              loading="lazy"
              alt=""
              src="/icmorevert18px.svg"
            />
          </div>
        </div>
      </div>
      <div className="table-headers15" />
      <div className="table-headers16">
        <div className="lendstar-wrapper1">
          <div className="lendstar3">Lendstar</div>
        </div>
        <div className="table-headers-child">
          <div className="frame-parent6">
            <div className="grace-effiom-wrapper1">
              <div className="grace-effiom3">Grace Effiom</div>
            </div>
            <div className="gracelendstarcom3">grace@lendstar.com</div>
            <div className="empty-user-email">07060780922</div>
          </div>
        </div>
        <div className="frame-parent7">
          <div className="apr-30-2020-1000-am-wrapper1">
            <div className="apr-30-20204">Apr 30, 2020 10:00 AM</div>
          </div>
          <div className="inactive-pill-frame">
            <div className="inactive-pill3">
              <div className="inactive-pill-shape" />
              <div className="inactive2">Inactive</div>
            </div>
          </div>
          <div className="ic-more-vert-18px-wrapper4">
            <img
              className="ic-more-vert-18px-icon8"
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
