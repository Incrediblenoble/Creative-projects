import { FunctionComponent } from "react";
import ReviewContent from "./ReviewContent";
import "./Reviews.css";

export type ReviewsType = {
  className?: string;
};

const Reviews: FunctionComponent<ReviewsType> = ({ className = "" }) => {
  return (
    <section className={`reviews ${className}`}>
      <div className="reviews-child" />
      <div className="previous-reviews">
        <h2 className="reviews1">Reviews</h2>
        <ReviewContent
          july72024="July 7, 2024"
          stars="/stars.svg"
          sleek="Sleek"
          iLoveIt="I love it"
          reviewedByAsh="Reviewed by Ash"
        />
      </div>
      <div className="review-headers">
        <div className="review-headers-child" />
        <div className="june-30-2024">June 30, 2024</div>
        <img className="stars-icon1" alt="" src="/stars-1.svg" />
        <h2 className="beautiful">Beautiful</h2>
        <div className="i-love-the">I love the color</div>
        <div className="reviewed-by-segun">Reviewed by Segun</div>
      </div>
      <ReviewContent
        july72024="May 11, 2024"
        stars="/stars.svg"
        sleek="WOW"
        iLoveIt="This is the best gift i’ve gotten this year"
        reviewedByAsh="Reviewed by Mary"
        propAlignSelf="unset"
        propPadding="23px 20px 24px 32px"
        propWidth="1197px"
      />
      <ReviewContent
        july72024="May 11, 2024"
        stars="/stars-1.svg"
        sleek="Portable"
        iLoveIt="I like the fact that i can take it around"
        reviewedByAsh="Reviewed by HNG"
        propAlignSelf="unset"
        propPadding="23px 20px 24px 32px"
        propWidth="1197px"
      />
    </section>
  );
};

export default Reviews;
