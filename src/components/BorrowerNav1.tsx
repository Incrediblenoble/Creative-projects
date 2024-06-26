import { FunctionComponent } from "react";
import styles from "./BorrowerNav1.module.css";

export type BorrowerNavType = {
  className?: string;
};

const BorrowerNav: FunctionComponent<BorrowerNavType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.borrowerNav, className].join(" ")}>
      <div className={styles.base} />
      <div className={styles.navFooterParent}>
        <div className={styles.navFooter}>
          <div className={styles.divider} />
          <div className={styles.wrapper}>
            <div className={styles.div}>
              <img
                className={styles.npLogout11537380000001Icon}
                alt=""
                src="/np-logout-1153738-000000-1.svg"
              />
              <div className={styles.logoutIcon}>
                <img
                  className={styles.signOut1Icon}
                  loading="lazy"
                  alt=""
                  src="/signout-1.svg"
                />
              </div>
              <a className={styles.logout}>Logout</a>
            </div>
          </div>
        </div>
        <div className={styles.v120}>v1.2.0</div>
      </div>
      <div className={styles.navigationContent}>
        <div className={styles.switcherButton}>
          <div className={styles.organizationSwitcherContent}>
            <div className={styles.nextOrganizationButton}>
              <img
                className={styles.briefcase1Icon}
                alt=""
                src="/briefcase-1.svg"
              />
            </div>
            <img
              className={styles.npBusiness29874770000001Icon}
              alt=""
              src="/np-business-2987477-000000-1.svg"
            />
            <a className={styles.switchOrganization}>Switch Organization</a>
            <div className={styles.nextOrganization}>
              <img
                className={styles.npNext22368260000002Icon}
                alt=""
                src="/np-next-2236826-000000-2-2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.customersLink}>
          <div className={styles.navLinkWrapper}>
            <div className={styles.navLink}>
              <div className={styles.base1} />
              <div className={styles.stripe} />
              <div className={styles.home}>
                <div className={styles.homeIcon}>
                  <img className={styles.home1Icon} alt="" src="/home-1.svg" />
                </div>
                <img
                  className={styles.npDashboard31641900000001Icon}
                  alt=""
                  src="/np-dashboard-3164190-000000-1.svg"
                />
                <a className={styles.dashboard}>Dashboard</a>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.customersWrapper}>
              <div className={styles.customers}>CUSTOMERS</div>
            </div>
            <div className={styles.usersLink}>
              <div className={styles.navLink1}>
                <div className={styles.base2} />
                <div className={styles.stripe1} />
                <div className={styles.usersIcon}>
                  <div className={styles.users}>
                    <div className={styles.userFriends1Wrapper}>
                      <img
                        className={styles.userFriends1Icon}
                        alt=""
                        src="/userfriends-1.svg"
                      />
                    </div>
                    <a className={styles.users1}>Users</a>
                  </div>
                </div>
              </div>
              <div className={styles.navLinkContainer}>
                <div className={styles.navLink2}>
                  <div className={styles.base3} />
                  <div className={styles.stripe2} />
                  <div className={styles.users2}>
                    <div className={styles.users1Wrapper}>
                      <img
                        className={styles.users1Icon}
                        alt=""
                        src="/users-1.svg"
                      />
                    </div>
                    <img
                      className={styles.npTeam3391480000001Icon}
                      alt=""
                      src="/np-team-339148-000000-1.svg"
                    />
                    <input
                      className={styles.guarantors}
                      placeholder="Guarantors"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.businessesContentWrapper}>
            <div className={styles.businessesContent}>
              <div className={styles.navLinkFrame}>
                <div className={styles.navLink3}>
                  <div className={styles.base4} />
                  <div className={styles.stripe3} />
                  <div className={styles.loans}>
                    <div className={styles.sackIcon}>
                      <img
                        className={styles.sack1Icon}
                        loading="lazy"
                        alt=""
                        src="/sack-1.svg"
                      />
                    </div>
                    <img
                      className={styles.npLoan12439910000001Icon}
                      alt=""
                      src="/np-loan-1243991-000000-1.svg"
                    />
                    <div className={styles.loans1}>Loans</div>
                  </div>
                </div>
              </div>
              <div className={styles.navLink4}>
                <div className={styles.base5} />
                <div className={styles.stripe4} />
                <div className={styles.loans2}>
                  <div className={styles.handshakeRegular1Wrapper}>
                    <img
                      className={styles.handshakeRegular1Icon}
                      loading="lazy"
                      alt=""
                      src="/handshakeregular-1.svg"
                    />
                  </div>
                  <img
                    className={styles.npLoan12439910000001Icon1}
                    alt=""
                    src="/np-loan-1243991-000000-1.svg"
                  />
                  <div className={styles.decisionModels}>Decision Models</div>
                </div>
              </div>
              <div className={styles.userLoans}>
                <div className={styles.userLoanOptions}>
                  <div className={styles.navLink5}>
                    <div className={styles.base6} />
                    <div className={styles.stripe5} />
                    <div className={styles.savings}>
                      <div className={styles.piggyBankIcon}>
                        <img
                          className={styles.piggyBank1Icon}
                          loading="lazy"
                          alt=""
                          src="/piggybank-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npMoney5491090000001Icon}
                        alt=""
                        src="/np-money-549109-000000-1.svg"
                      />
                      <img
                        className={styles.coins1Icon}
                        alt=""
                        src="/coins-1.svg"
                      />
                      <div className={styles.savings1}>Savings</div>
                    </div>
                  </div>
                  <div className={styles.navLink6}>
                    <div className={styles.base7} />
                    <div className={styles.stripe6} />
                    <div className={styles.savings2}>
                      <img
                        className={styles.savingsChild}
                        loading="lazy"
                        alt=""
                        src="/group-104.svg"
                      />
                      <img
                        className={styles.npMoney13461490000001Icon}
                        alt=""
                        src="/np-money-1346149-000000-1.svg"
                      />
                      <div className={styles.loanRequestsWrapper}>
                        <div className={styles.loanRequests}>Loan Requests</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.navLink7}>
                    <div className={styles.base8} />
                    <div className={styles.stripe7} />
                    <div className={styles.users3}>
                      <div className={styles.checkTimesIcon}>
                        <img
                          className={styles.userCheck1Icon}
                          loading="lazy"
                          alt=""
                          src="/usercheck-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npUser29959930000001Icon}
                        alt=""
                        src="/np-user-2995993-000000-1.svg"
                      />
                      <div className={styles.whitelist}>Whitelist</div>
                    </div>
                  </div>
                  <div className={styles.navLink8}>
                    <div className={styles.base9} />
                    <div className={styles.stripe8} />
                    <div className={styles.users4}>
                      <div className={styles.userTimes1Wrapper}>
                        <img
                          className={styles.userTimes1Icon}
                          loading="lazy"
                          alt=""
                          src="/usertimes-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npDeleteUser9502480000001Icon}
                        alt=""
                        src="/np-deleteuser-950248-000000-1.svg"
                      />
                      <div className={styles.karma}>Karma</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.settingsContentWrapper}>
            <div className={styles.settingsContent}>
              <div className={styles.businessesWrapper}>
                <div className={styles.businesses}>BUSINESSES</div>
              </div>
              <div className={styles.businessOptions}>
                <div className={styles.businessLinks}>
                  <div className={styles.navLink9}>
                    <div className={styles.base10} />
                    <div className={styles.stripe9} />
                    <div className={styles.organization}>
                      <div className={styles.briefcase1Wrapper}>
                        <img
                          className={styles.briefcase1Icon1}
                          loading="lazy"
                          alt=""
                          src="/briefcase-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npBusiness29874770000001Icon1}
                        alt=""
                        src="/np-business-2987477-000000-1.svg"
                      />
                      <div className={styles.organization1}>Organization</div>
                    </div>
                  </div>
                </div>
                <div className={styles.navLink10}>
                  <div className={styles.base11} />
                  <div className={styles.stripe10} />
                  <div className={styles.loanProducts}>
                    <img
                      className={styles.loanProductsChild}
                      loading="lazy"
                      alt=""
                      src="/group-104.svg"
                    />
                    <div className={styles.loanProductsWrapper}>
                      <div className={styles.loanProducts1}>Loan Products</div>
                    </div>
                  </div>
                </div>
                <div className={styles.businessLinks1}>
                  <div className={styles.navLink11}>
                    <div className={styles.base12} />
                    <div className={styles.stripe11} />
                    <div className={styles.savingsProducts}>
                      <div className={styles.npBank1485010000001Wrapper}>
                        <img
                          className={styles.npBank1485010000001Icon}
                          loading="lazy"
                          alt=""
                          src="/np-bank-148501-000000-1.svg"
                        />
                      </div>
                      <div className={styles.savingsProducts1}>
                        Savings Products
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.businessLinks2}>
                  <div className={styles.navLink12}>
                    <div className={styles.base13} />
                    <div className={styles.stripe12} />
                    <div className={styles.savingsProducts2}>
                      <div className={styles.coinsSolid1Wrapper}>
                        <img
                          className={styles.coinsSolid1Icon}
                          loading="lazy"
                          alt=""
                          src="/coinssolid-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npBank1485010000001Icon1}
                        alt=""
                        src="/np-bank-148501-000000-1.svg"
                      />
                      <div className={styles.feesAndCharges}>
                        Fees and Charges
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.businessServices}>
                  <div className={styles.navLink13}>
                    <div className={styles.base14} />
                    <div className={styles.stripe13} />
                    <div className={styles.organization2}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icon}
                          loading="lazy"
                          alt=""
                          src="/icon-4.svg"
                        />
                      </div>
                      <div className={styles.transactions}>Transactions</div>
                    </div>
                  </div>
                </div>
                <div className={styles.businessLinks3}>
                  <div className={styles.navLink14}>
                    <div className={styles.base15} />
                    <div className={styles.stripe14} />
                    <div className={styles.services}>
                      <div className={styles.galaxy1Wrapper}>
                        <img
                          className={styles.galaxy1Icon}
                          loading="lazy"
                          alt=""
                          src="/galaxy-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npServices13630360000001Icon}
                        alt=""
                        src="/np-services-1363036-000000-1.svg"
                      />
                      <img
                        className={styles.tools1Icon}
                        alt=""
                        src="/tools-1.svg"
                      />
                      <a className={styles.services1}>Services</a>
                    </div>
                  </div>
                </div>
                <div className={styles.businessLinks4}>
                  <div className={styles.navLink15}>
                    <div className={styles.base16} />
                    <div className={styles.stripe15} />
                    <div className={styles.services2}>
                      <div className={styles.userCog1Wrapper}>
                        <img
                          className={styles.userCog1Icon}
                          loading="lazy"
                          alt=""
                          src="/usercog-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npServices13630360000001Icon1}
                        alt=""
                        src="/np-services-1363036-000000-1.svg"
                      />
                      <div className={styles.serviceAccount}>
                        Service Account
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.businessLinks5}>
                  <div className={styles.navLink16}>
                    <div className={styles.base17} />
                    <div className={styles.stripe16} />
                    <div className={styles.settlements}>
                      <div className={styles.scroll1Wrapper}>
                        <img
                          className={styles.scroll1Icon}
                          loading="lazy"
                          alt=""
                          src="/scroll-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npMarriageSettlement2054958Icon}
                        alt=""
                        src="/np-marriagesettlement-2054958-000000-1.svg"
                      />
                      <div className={styles.settlements1}>Settlements</div>
                    </div>
                  </div>
                </div>
                <div className={styles.businessesLink}>
                  <div className={styles.navLink17}>
                    <div className={styles.base18} />
                    <div className={styles.stripe17} />
                    <div className={styles.savings3}>
                      <div className={styles.chartBar2Wrapper}>
                        <img
                          className={styles.chartBar2Icon}
                          loading="lazy"
                          alt=""
                          src="/chartbar-2.svg"
                        />
                      </div>
                      <img
                        className={styles.chartBar1Icon}
                        alt=""
                        src="/chartbar-1.svg"
                      />
                      <a className={styles.reports}>Reports</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.customersLinkInner}>
            <div className={styles.settingsParent}>
              <div className={styles.settings}>SETTINGS</div>
              <div className={styles.frameDiv}>
                <div className={styles.navLink18}>
                  <div className={styles.base19} />
                  <div className={styles.stripe18} />
                  <div className={styles.preferences}>
                    <div className={styles.slidersH1Wrapper}>
                      <img
                        className={styles.slidersH1Icon}
                        loading="lazy"
                        alt=""
                        src="/slidersh-1.svg"
                      />
                    </div>
                    <img
                      className={styles.npPreferences1069805000000Icon}
                      alt=""
                      src="/np-preferences-1069805-000000-1.svg"
                    />
                    <img className={styles.cog1Icon} alt="" src="/cog-1.svg" />
                    <div className={styles.preferences1}>Preferences</div>
                  </div>
                </div>
              </div>
              <div className={styles.organizationLink}>
                <div className={styles.navLink19}>
                  <div className={styles.base20} />
                  <div className={styles.stripe19} />
                  <div className={styles.organization3}>
                    <div className={styles.badgePercent1Wrapper}>
                      <img
                        className={styles.badgePercent1Icon}
                        loading="lazy"
                        alt=""
                        src="/badgepercent-1.svg"
                      />
                    </div>
                    <img
                      className={styles.npPercentage4400780000001Icon}
                      alt=""
                      src="/np-percentage-440078-000000-1.svg"
                    />
                    <div className={styles.feesAndPricing}>
                      Fees and Pricing
                    </div>
                    <img
                      className={styles.humidity1Icon}
                      alt=""
                      src="/humidity-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.navLink20}>
                  <div className={styles.base21} />
                  <div className={styles.stripe20} />
                  <div className={styles.organization4}>
                    <img
                      className={styles.clipboardList1Icon}
                      loading="lazy"
                      alt=""
                      src="/clipboardlist-1.svg"
                    />
                    <img
                      className={styles.npAudit12195090000001Icon}
                      alt=""
                      src="/np-audit-1219509-000000-1.svg"
                    />
                    <div className={styles.auditLogsWrapper}>
                      <div className={styles.auditLogs}>Audit Logs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.systemsMessage}>
                  <div className={styles.navLink21}>
                    <div className={styles.base22} />
                    <div className={styles.stripe21} />
                    <div className={styles.organization5}>
                      <div className={styles.tire1Wrapper}>
                        <img
                          className={styles.tire1Icon}
                          loading="lazy"
                          alt=""
                          src="/tire-1.svg"
                        />
                      </div>
                      <img
                        className={styles.npMailSettings74380000000Icon}
                        alt=""
                        src="/np-mailsettings-74380-000000-1.svg"
                      />
                      <div className={styles.systemsMessages}>
                        Systems Messages
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider1} />
    </div>
  );
};

export default BorrowerNav;
