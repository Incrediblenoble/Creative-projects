import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductSlider.css";

export type ProductSliderType = {
  className?: string;
};

const ProductSlider: FunctionComponent<ProductSliderType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onLeftArrowImageClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  return (
    <section className={`product-slider ${className}`}>
      <div className="product-slider-child" />
      <img
        className="product-image-icon"
        loading="lazy"
        alt=""
        src="/rectangle-22@2x.png"
      />
      <div className="slider-control">
        <img
          className="slider-control-child"
          loading="lazy"
          alt=""
          src="/rectangle-25@2x.png"
        />
        <div className="rectangle-container">
          <img
            className="rectangle-icon"
            loading="lazy"
            alt=""
            src="/rectangle-23@2x.png"
          />
          <div className="separator">(4)</div>
        </div>
        <div className="frame-div">
          <img
            className="frame-child1"
            loading="lazy"
            alt=""
            src="/rectangle-24@2x.png"
          />
          <div className="div">(22)</div>
        </div>
        <img
          className="left-arrow-icon"
          loading="lazy"
          alt=""
          src="/left-arrow@2x.png"
          onClick={onLeftArrowImageClick}
        />
      </div>
    </section>
  );
};

export default ProductSlider;
