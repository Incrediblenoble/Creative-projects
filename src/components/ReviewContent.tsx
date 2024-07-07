import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ReviewContent.css";

export type ReviewContentType = {
  className?: string;
  july72024?: string;
  stars?: string;
  sleek?: string;
  iLoveIt?: string;
  reviewedByAsh?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const ReviewContent: FunctionComponent<ReviewContentType> = ({
  className = "",
  july72024,
  stars,
  sleek,
  iLoveIt,
  reviewedByAsh,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const reviewContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div className={`review-content ${className}`} style={reviewContentStyle}>
      <div className="review-content-child" />
      <div className="july-7-2024-container">
        <p className="july-7-2024">{july72024}</p>
      </div>
      <img className="stars-icon" loading="lazy" alt="" src={stars} />
      <h2 className="sleek">{sleek}</h2>
      <div className="i-love-it">{iLoveIt}</div>
      <div className="reviewed-by-ash">{reviewedByAsh}</div>
    </div>
  );
};

export default ReviewContent;
