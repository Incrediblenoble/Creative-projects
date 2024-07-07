import { FunctionComponent } from "react";
import "./PromoContainer.css";

export type PromoContainerType = {
  className?: string;
  rectangle24?: string;
  oFF?: string;
  rightArrow?: string;

  /** Action props */
  onRightArrowClick?: () => void;
};

const PromoContainer: FunctionComponent<PromoContainerType> = ({
  className = "",
  rectangle24,
  oFF,
  rightArrow,
  onRightArrowClick,
}) => {
  return (
    <div className={`promo-container ${className}`}>
      <img className="promo-container-child" alt="" src={rectangle24} />
      <div className="promo">
        <div className="promo-child" />
        <div className="off">{oFF}</div>
      </div>
      <div className="wrapper-right-arrow">
        <img
          className="right-arrow-icon"
          loading="lazy"
          alt=""
          src={rightArrow}
          onClick={onRightArrowClick}
        />
      </div>
    </div>
  );
};

export default PromoContainer;
