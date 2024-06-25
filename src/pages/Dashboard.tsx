import { FunctionComponent } from "react";
import Table from "../components/Table";
import BorrowerNav from "../components/BorrowerNav";
import TopNav from "../components/TopNav";
import "./Dashboard.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="dashboard">
      <div className="pagination">
        <div className="page-counter">
          <div className="page-label">
            <a className="showing">Showing</a>
          </div>
          <div className="prev-btn">
            <div className="base" />
            <div className="div">100</div>
            <div className="np-next-2236826-000000-2-wrapper">
              <img
                className="np-next-2236826-000000-2-icon"
                alt=""
                src="/np-next-2236826-000000-2@2x.png"
              />
            </div>
          </div>
          <div className="page-label1">
            <div className="out-of-100">out of 100</div>
          </div>
        </div>
        <div className="pagination-container">
          <div className="div1">
            <div className="prev-btn1">
              <div className="page-btn-shapes" />
              <img
                className="np-next-2236826-000000-2-icon1"
                loading="lazy"
                alt=""
                src="/np-next-2236826-000000-2-1.svg"
              />
            </div>
            <div className="page-btns">
              <div className="div2">1</div>
            </div>
            <div className="page-btns1">
              <div className="div3">2</div>
            </div>
            <div className="page-btns2">
              <div className="div4">3</div>
            </div>
            <div className="page-btns3">
              <div className="div5">...</div>
            </div>
            <div className="page-btns4">
              <div className="div6">15</div>
            </div>
            <div className="page-btns5">
              <div className="div7">16</div>
            </div>
            <div className="next-btn">
              <div className="next-btn-child" />
              <img
                className="np-next-2236826-000000-1-icon"
                loading="lazy"
                alt=""
                src="/np-next-2236826-000000-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Table />
      <div className="content">
        <div className="base1" />
        <img className="icon" loading="lazy" alt="" src="/icon.svg" />
        <div className="users-with-savings">Users with Savings</div>
        <div className="spacer">102,453</div>
      </div>
      <div className="content1">
        <div className="base2" />
        <img className="icon1" loading="lazy" alt="" src="/icon-1.svg" />
        <div className="users-with-loans">Users with Loans</div>
        <div className="div8">12,453</div>
      </div>
      <div className="content2">
        <div className="base3" />
        <img className="icon2" loading="lazy" alt="" src="/icon-2.svg" />
        <div className="active-users">Active Users</div>
        <div className="div9">2,453</div>
      </div>
      <div className="content3">
        <div className="base4" />
        <img className="icon3" loading="lazy" alt="" src="/icon-3.svg" />
        <a className="users">Users</a>
        <div className="div10">2,453</div>
      </div>
      <a className="users1">Users</a>
      <BorrowerNav />
      <TopNav />
    </div>
  );
};

export default Dashboard;
