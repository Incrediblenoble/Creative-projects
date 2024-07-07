import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PromoContainer from "./PromoContainer";
import "./FrameComponent5.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRightArrowClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`rectangle-parent4 ${className}`}>
      <div className="frame-child6" />
      <div className="promo-title">
        <h1 className="promo-sales1">Promo Sales</h1>
      </div>
      <div className="promo-items">
        <div className="rectangle-parent5">
          <img className="frame-child7" alt="" />
          <div className="promo2">
            <div className="promo-inner" />
            <div className="off2">30% OFF</div>
          </div>
        </div>
        <PromoContainer
          rectangle24="pending_19:45"
          oFF="30% OFF"
          rightArrow="pending_20:386"
          onRightArrowClick={onRightArrowClick}
        />
      </div>
      <div className="frame-wrapper3">
        <div className="flat-screen-tv-parent">
          <h1 className="flat-screen-tv">Flat screen Tv</h1>
          <h1 className="couch">Couch</h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
