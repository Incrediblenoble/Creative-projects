import { FunctionComponent } from "react";
import "./BorrowerNav.css";

export type BorrowerNavType = {
  className?: string;
};

const BorrowerNav: FunctionComponent<BorrowerNavType> = ({
  className = "",
}) => {
  return (
    <div className={`borrower-nav ${className}`}>
      <div className="base6" />
      <div className="nav-content">
        <div className="nav-footer">
          <div className="divider" />
          <div className="logout-action-wrapper">
            <div className="logout-action">
              <img
                className="np-logout-1153738-000000-1-icon"
                alt=""
                src="/np-logout-1153738-000000-1.svg"
              />
              <div className="logout-icon">
                <img className="sign-out-1-icon" alt="" src="/signout-1.svg" />
              </div>
              <a className="logout">Logout</a>
            </div>
          </div>
        </div>
        <div className="v120">v1.2.0</div>
      </div>
      <div className="switch-organization-action">
        <div className="switch-organization-content">
          <div className="div17">
            <div className="switch-organization-icon">
              <img className="briefcase-1-icon" alt="" src="/briefcase-1.svg" />
            </div>
            <img
              className="np-business-2987477-000000-1-icon"
              alt=""
              src="/np-business-2987477-000000-1.svg"
            />
            <a className="switch-organization">Switch Organization</a>
            <div className="np-next-2236826-000000-2-container">
              <img
                className="np-next-2236826-000000-2-icon2"
                alt=""
                src="/np-next-2236826-000000-2-2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="dashboard-link">
          <div className="nav-link-wrapper">
            <div className="nav-link">
              <div className="base7" />
              <div className="stripe" />
              <div className="home">
                <div className="dashboard-glyph">
                  <img
                    className="home-1-icon"
                    loading="lazy"
                    alt=""
                    src="/home-1.svg"
                  />
                </div>
                <img
                  className="np-dashboard-3164190-000000-1-icon"
                  alt=""
                  src="/np-dashboard-3164190-000000-1.svg"
                />
                <a className="dashboard1">Dashboard</a>
              </div>
            </div>
          </div>
          <div className="customer-link">
            <div className="customers-wrapper">
              <div className="customers">CUSTOMERS</div>
            </div>
            <div className="users-action">
              <div className="nav-link1">
                <div className="base8" />
                <div className="stripe1" />
                <div className="user-icon">
                  <div className="users2">
                    <div className="user-image">
                      <img
                        className="user-friends-1-icon"
                        alt=""
                        src="/userfriends-1.svg"
                      />
                    </div>
                    <a className="users3">Users</a>
                  </div>
                </div>
              </div>
              <div className="nav-link-container">
                <div className="nav-link2">
                  <div className="base9" />
                  <div className="stripe2" />
                  <div className="users4">
                    <div className="guarantor-glyph">
                      <img className="users-1-icon" alt="" src="/users-1.svg" />
                    </div>
                    <img
                      className="np-team-339148-000000-1-icon"
                      alt=""
                      src="/np-team-339148-000000-1.svg"
                    />
                    <input
                      className="guarantors"
                      placeholder="Guarantors"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loan-action">
            <div className="loan-icon-parent">
              <div className="loan-icon">
                <div className="nav-link3">
                  <div className="base10" />
                  <div className="stripe3" />
                  <div className="loans">
                    <div className="loan-label">
                      <img
                        className="sack-1-icon"
                        loading="lazy"
                        alt=""
                        src="/sack-1.svg"
                      />
                    </div>
                    <img
                      className="np-loan-1243991-000000-1-icon"
                      alt=""
                      src="/np-loan-1243991-000000-1.svg"
                    />
                    <div className="loans1">Loans</div>
                  </div>
                </div>
              </div>
              <div className="nav-link4">
                <div className="base11" />
                <div className="stripe4" />
                <div className="loans2">
                  <div className="model-label">
                    <img
                      className="handshake-regular-1-icon"
                      loading="lazy"
                      alt=""
                      src="/handshakeregular-1.svg"
                    />
                  </div>
                  <img
                    className="np-loan-1243991-000000-1-icon1"
                    alt=""
                    src="/np-loan-1243991-000000-1.svg"
                  />
                  <div className="decision-models">Decision Models</div>
                </div>
              </div>
              <div className="user-list-content">
                <div className="user-lists">
                  <div className="nav-link5">
                    <div className="base12" />
                    <div className="stripe5" />
                    <div className="savings">
                      <div className="saving-icon">
                        <img
                          className="piggy-bank-1-icon"
                          alt=""
                          src="/piggybank-1.svg"
                        />
                      </div>
                      <img
                        className="np-money-549109-000000-1-icon"
                        alt=""
                        src="/np-money-549109-000000-1.svg"
                      />
                      <img className="coins-1-icon" alt="" src="/coins-1.svg" />
                      <div className="savings1">Savings</div>
                    </div>
                  </div>
                  <div className="nav-link6">
                    <div className="base13" />
                    <div className="stripe6" />
                    <div className="savings2">
                      <img
                        className="savings-child"
                        loading="lazy"
                        alt=""
                        src="/group-104.svg"
                      />
                      <img
                        className="np-money-1346149-000000-1-icon"
                        alt=""
                        src="/np-money-1346149-000000-1.svg"
                      />
                      <div className="loan-request-label">
                        <div className="loan-requests">Loan Requests</div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link7">
                    <div className="base14" />
                    <div className="stripe7" />
                    <div className="users5">
                      <div className="user-type-icons">
                        <img
                          className="user-check-1-icon"
                          alt=""
                          src="/usercheck-1.svg"
                        />
                      </div>
                      <img
                        className="np-user-2995993-000000-1-icon"
                        alt=""
                        src="/np-user-2995993-000000-1.svg"
                      />
                      <div className="whitelist">Whitelist</div>
                    </div>
                  </div>
                  <div className="nav-link8">
                    <div className="base15" />
                    <div className="stripe8" />
                    <div className="users6">
                      <div className="user-times-1-wrapper">
                        <img
                          className="user-times-1-icon"
                          alt=""
                          src="/usertimes-1.svg"
                        />
                      </div>
                      <img
                        className="np-delete-user-950248-000000-1-icon"
                        alt=""
                        src="/np-deleteuser-950248-000000-1.svg"
                      />
                      <div className="karma">Karma</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="business-action">
            <div className="business-label-parent">
              <div className="business-label">
                <div className="businesses">BUSINESSES</div>
              </div>
              <div className="business-content">
                <div className="business-navigation">
                  <div className="nav-link9">
                    <div className="base16" />
                    <div className="stripe9" />
                    <div className="organization1">
                      <div className="business-icons">
                        <img
                          className="briefcase-1-icon1"
                          loading="lazy"
                          alt=""
                          src="/briefcase-1.svg"
                        />
                      </div>
                      <img
                        className="np-business-2987477-000000-1-icon1"
                        alt=""
                        src="/np-business-2987477-000000-1.svg"
                      />
                      <div className="organization2">Organization</div>
                    </div>
                  </div>
                </div>
                <div className="nav-link10">
                  <div className="base17" />
                  <div className="stripe10" />
                  <div className="loan-products">
                    <img
                      className="loan-products-child"
                      loading="lazy"
                      alt=""
                      src="/group-104.svg"
                    />
                    <div className="loan-products-label">
                      <div className="loan-products1">Loan Products</div>
                    </div>
                  </div>
                </div>
                <div className="business-navigation1">
                  <div className="nav-link11">
                    <div className="base18" />
                    <div className="stripe11" />
                    <div className="savings-products">
                      <div className="np-bank-148501-000000-1-wrapper">
                        <img
                          className="np-bank-148501-000000-1-icon"
                          loading="lazy"
                          alt=""
                          src="/np-bank-148501-000000-1.svg"
                        />
                      </div>
                      <div className="savings-products1">Savings Products</div>
                    </div>
                  </div>
                </div>
                <div className="business-navigation2">
                  <div className="nav-link12">
                    <div className="base19" />
                    <div className="stripe12" />
                    <div className="savings-products2">
                      <div className="coins-solid-1-wrapper">
                        <img
                          className="coins-solid-1-icon"
                          alt=""
                          src="/coinssolid-1.svg"
                        />
                      </div>
                      <img
                        className="np-bank-148501-000000-1-icon1"
                        alt=""
                        src="/np-bank-148501-000000-1.svg"
                      />
                      <div className="fees-and-charges">Fees and Charges</div>
                    </div>
                  </div>
                </div>
                <div className="business-navigation3">
                  <div className="nav-link13">
                    <div className="base20" />
                    <div className="stripe13" />
                    <div className="organization3">
                      <div className="icon-wrapper">
                        <img
                          className="icon4"
                          loading="lazy"
                          alt=""
                          src="/icon-4.svg"
                        />
                      </div>
                      <div className="transactions">Transactions</div>
                    </div>
                  </div>
                </div>
                <div className="services-action">
                  <div className="nav-link14">
                    <div className="base21" />
                    <div className="stripe14" />
                    <div className="services">
                      <div className="services-glyph">
                        <img
                          className="galaxy-1-icon"
                          alt=""
                          src="/galaxy-1.svg"
                        />
                      </div>
                      <img
                        className="np-services-1363036-000000-1-icon"
                        alt=""
                        src="/np-services-1363036-000000-1.svg"
                      />
                      <img className="tools-1-icon" alt="" src="/tools-1.svg" />
                      <a className="services1">Services</a>
                    </div>
                  </div>
                </div>
                <div className="business-navigation4">
                  <div className="nav-link15">
                    <div className="base22" />
                    <div className="stripe15" />
                    <div className="services2">
                      <div className="user-cog-1-wrapper">
                        <img
                          className="user-cog-1-icon"
                          loading="lazy"
                          alt=""
                          src="/usercog-1.svg"
                        />
                      </div>
                      <img
                        className="np-services-1363036-000000-1-icon1"
                        alt=""
                        src="/np-services-1363036-000000-1.svg"
                      />
                      <div className="service-account">Service Account</div>
                    </div>
                  </div>
                </div>
                <div className="business-navigation5">
                  <div className="nav-link16">
                    <div className="base23" />
                    <div className="stripe16" />
                    <div className="settlements">
                      <div className="scroll-1-wrapper">
                        <img
                          className="scroll-1-icon"
                          loading="lazy"
                          alt=""
                          src="/scroll-1.svg"
                        />
                      </div>
                      <img
                        className="np-marriage-settlement-2054958-icon"
                        alt=""
                        src="/np-marriagesettlement-2054958-000000-1.svg"
                      />
                      <div className="settlements1">Settlements</div>
                    </div>
                  </div>
                </div>
                <div className="business-navigation6">
                  <div className="nav-link17">
                    <div className="base24" />
                    <div className="stripe17" />
                    <div className="savings3">
                      <div className="chart-bar-2-wrapper">
                        <img
                          className="chart-bar-2-icon"
                          loading="lazy"
                          alt=""
                          src="/chartbar-2.svg"
                        />
                      </div>
                      <img
                        className="chart-bar-1-icon"
                        alt=""
                        src="/chartbar-1.svg"
                      />
                      <a className="reports">Reports</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="setting-action">
            <div className="settings-parent">
              <div className="settings">SETTINGS</div>
              <div className="setting-content">
                <div className="nav-link18">
                  <div className="base25" />
                  <div className="stripe18" />
                  <div className="preferences">
                    <div className="preference-icon">
                      <img
                        className="sliders-h-1-icon"
                        loading="lazy"
                        alt=""
                        src="/slidersh-1.svg"
                      />
                    </div>
                    <img
                      className="np-preferences-1069805-000000-icon"
                      alt=""
                      src="/np-preferences-1069805-000000-1.svg"
                    />
                    <img className="cog-1-icon" alt="" src="/cog-1.svg" />
                    <div className="preferences1">Preferences</div>
                  </div>
                </div>
              </div>
              <div className="preference-label">
                <div className="nav-link19">
                  <div className="base26" />
                  <div className="stripe19" />
                  <div className="organization4">
                    <div className="pricing-badge">
                      <img
                        className="badge-percent-1-icon"
                        loading="lazy"
                        alt=""
                        src="/badgepercent-1.svg"
                      />
                    </div>
                    <img
                      className="np-percentage-440078-000000-1-icon"
                      alt=""
                      src="/np-percentage-440078-000000-1.svg"
                    />
                    <div className="fees-and-pricing">Fees and Pricing</div>
                    <img
                      className="humidity-1-icon"
                      alt=""
                      src="/humidity-1.svg"
                    />
                  </div>
                </div>
                <div className="nav-link20">
                  <div className="base27" />
                  <div className="stripe20" />
                  <div className="organization5">
                    <img
                      className="clipboard-list-1-icon"
                      loading="lazy"
                      alt=""
                      src="/clipboardlist-1.svg"
                    />
                    <img
                      className="np-audit-1219509-000000-1-icon"
                      alt=""
                      src="/np-audit-1219509-000000-1.svg"
                    />
                    <div className="audit-logs-wrapper">
                      <div className="audit-logs">Audit Logs</div>
                    </div>
                  </div>
                </div>
                <div className="system-messages-link">
                  <div className="nav-link21">
                    <div className="base28" />
                    <div className="stripe21" />
                    <div className="organization6">
                      <div className="tires">
                        <img className="tire-1-icon" alt="" src="/tire-1.svg" />
                      </div>
                      <img
                        className="np-mail-settings-74380-000000-icon"
                        alt=""
                        src="/np-mailsettings-74380-000000-1.svg"
                      />
                      <div className="systems-messages">Systems Messages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider1" />
    </div>
  );
};

export default BorrowerNav;
