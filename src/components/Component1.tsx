import { FunctionComponent } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.base} />
      <div className={styles.infoDividers}>
        <div className={styles.personalInformation}>Personal Information</div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.fullNameParent}>
              <div className={styles.fullName}>full Name</div>
              <div className={styles.graceEffiom}>Grace Effiom</div>
            </div>
            <div className={styles.maritalStatusParent}>
              <div className={styles.maritalStatus}>Marital status</div>
              <div className={styles.single}>Single</div>
            </div>
          </div>
          <div className={styles.guarantorContactDetailsParent}>
            <div className={styles.guarantorContactDetails}>
              <div className={styles.phoneNumber}>Phone Number</div>
              <div className={styles.contactInformationValues}>07060780922</div>
            </div>
            <div className={styles.guarantorPersonalDetails}>
              <div className={styles.children}>Children</div>
              <div className={styles.none}>None</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.emailAddressParent}>
              <div className={styles.emailAddress}>Email Address</div>
              <div className={styles.gracegmailcom}>grace@gmail.com</div>
            </div>
            <div className={styles.typeOfResidenceParent}>
              <div className={styles.typeOfResidence}>Type of residence</div>
              <div className={styles.parentsApartment}>Parent’s Apartment</div>
            </div>
          </div>
          <div className={styles.bvnParent}>
            <div className={styles.bvn}>Bvn</div>
            <div className={styles.div}>07060780922</div>
          </div>
          <div className={styles.genderParent}>
            <div className={styles.gender}>Gender</div>
            <div className={styles.female}>Female</div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.educationAndEmployment}>
          Education and Employment
        </div>
        <div className={styles.guarantorEmploymentDetailsParent}>
          <div className={styles.guarantorEmploymentDetails}>
            <div className={styles.guarantorEmploymentInformati}>
              <div className={styles.levelOfEducation}>level of education</div>
              <div className={styles.bsc}>B.Sc</div>
            </div>
            <div className={styles.guarantorFinancialInformatio}>
              <div className={styles.officeEmail}>office email</div>
              <div className={styles.gracelendsqrcom}>grace@lendsqr.com</div>
            </div>
          </div>
          <div className={styles.guarantorEmploymentDetails1}>
            <div className={styles.employmentStatusParent}>
              <div className={styles.employmentStatus}>employment status</div>
              <div className={styles.employed}>Employed</div>
            </div>
            <div className={styles.monthlyIncomeParent}>
              <div className={styles.monthlyIncome}>Monthly income</div>
              <div className={styles.div1}>₦200,000.00- ₦400,000.00</div>
            </div>
          </div>
          <div className={styles.guarantorEmploymentDetails2}>
            <div className={styles.sectorOfEmploymentParent}>
              <div className={styles.sectorOfEmployment}>
                sector of employment
              </div>
              <div className={styles.fintech}>FinTech</div>
            </div>
            <div className={styles.loanRepaymentParent}>
              <div className={styles.loanRepayment}>loan repayment</div>
              <div className={styles.div2}>40,000</div>
            </div>
          </div>
          <div className={styles.durationOfEmploymentParent}>
            <div className={styles.durationOfEmployment}>
              Duration of employment
            </div>
            <div className={styles.years}>2 years</div>
          </div>
        </div>
        <div className={styles.divider1} />
        <div className={styles.socials}>Socials</div>
        <div className={styles.guarantorSocialMediaDetailsParent}>
          <div className={styles.guarantorSocialMediaDetails}>
            <div className={styles.twitter}>Twitter</div>
            <div className={styles.graceEffiom1}>@grace_effiom</div>
          </div>
          <div className={styles.guarantorSocialMediaDetails1}>
            <div className={styles.facebook}>Facebook</div>
            <div className={styles.graceEffiom2}>Grace Effiom</div>
          </div>
          <div className={styles.guarantorSocialMediaDetails2}>
            <div className={styles.instagram}>Instagram</div>
            <div className={styles.graceEffiom3}>@grace_effiom</div>
          </div>
        </div>
        <div className={styles.divider2} />
        <div className={styles.guarantor}>Guarantor</div>
        <div className={styles.frameDiv}>
          <div className={styles.fullNameGroup}>
            <div className={styles.fullName1}>full Name</div>
            <div className={styles.debbyOgana}>Debby Ogana</div>
          </div>
          <div className={styles.phoneNumberParent}>
            <div className={styles.phoneNumber1}>Phone Number</div>
            <div className={styles.emptyValue}>07060780922</div>
          </div>
          <div className={styles.emailAddressGroup}>
            <div className={styles.emailAddress1}>Email Address</div>
            <div className={styles.debbygmailcom}>debby@gmail.com</div>
          </div>
          <div className={styles.relationshipParent}>
            <div className={styles.relationship}>Relationship</div>
            <a className={styles.sister}>Sister</a>
          </div>
        </div>
        <div className={styles.divider3} />
        <div className={styles.text}>{` `}</div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.fullNameContainer}>
          <div className={styles.fullName2}>full Name</div>
          <div className={styles.debbyOgana1}>Debby Ogana</div>
        </div>
        <div className={styles.phoneNumberGroup}>
          <div className={styles.phoneNumber2}>Phone Number</div>
          <div className={styles.div3}>07060780922</div>
        </div>
        <div className={styles.emailAddressContainer}>
          <div className={styles.emailAddress2}>Email Address</div>
          <div className={styles.debbygmailcom1}>debby@gmail.com</div>
        </div>
        <div className={styles.relationshipGroup}>
          <div className={styles.relationship1}>Relationship</div>
          <a className={styles.sister1}>Sister</a>
        </div>
      </div>
    </section>
  );
};

export default Component1;
