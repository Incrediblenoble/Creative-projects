import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PromoContainer from "./PromoContainer";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onLeftArrowImageClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  return (
    <div className={`rectangle-parent1 ${className}`}>
      <div className="rectangle-div" />
      <div className="promo-header">
        <h1 className="promo-sales">Promo Sales</h1>
      </div>
      <div className="promo-slider">
        <div className="promo-container1">
          <img
            className="promo-container-item"
            alt=""
            src="/rectangle-23-1@2x.png"
          />
          <div className="promo1">
            <div className="promo-item" />
            <div className="off1">15% OFF</div>
          </div>
          <img
            className="left-arrow-icon2"
            alt=""
            src="/left-arrow@2x.png"
            onClick={onLeftArrowImageClick}
          />
        </div>
        <PromoContainer
          rectangle24="/rectangle-24-1@2x.png"
          oFF="10% OFF"
          rightArrow="/right-arrow.svg"
        />
      </div>
      <div className="shoe-rack">
        <div className="books-parent">
          <h1 className="books">Books</h1>
          <h1 className="shoe-rack1">Shoe rack</h1>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
