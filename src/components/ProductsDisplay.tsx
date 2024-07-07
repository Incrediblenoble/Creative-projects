import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductImageContainer from "./ProductImageContainer";
import "./ProductsDisplay.css";

export type ProductsDisplayType = {
  className?: string;
};

const ProductsDisplay: FunctionComponent<ProductsDisplayType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  const onLeftArrowImageClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  return (
    <div className={`products-display2 ${className}`}>
      <div className="products-display-child" />
      <div className="product-container">
        <div className="product-item-container">
          <div className="product-items">
            <ProductImageContainer
              rectangle14="/rectangle-14@2x.png"
              powerbank="Powerbank"
            />
            <ProductImageContainer
              rectangle14="/rectangle-15@2x.png"
              powerbank="Bottle"
            />
            <ProductImageContainer
              rectangle14="/rectangle-16@2x.png"
              powerbank="Bluetooth speaker"
              onRectangleImageClick={onRectangleImageClick}
            />
            <ProductImageContainer
              rectangle14="/rectangle-21@2x.png"
              powerbank="Christmas light"
            />
          </div>
        </div>
        <img
          className="left-arrow-icon1"
          alt=""
          src="/left-arrow@2x.png"
          onClick={onLeftArrowImageClick}
        />
      </div>
      <div className="product-items-second-row">
        <ProductImageContainer
          rectangle14="/rectangle-18@2x.png"
          powerbank="Chair"
        />
        <ProductImageContainer
          rectangle14="/rectangle-19@2x.png"
          powerbank="Fan"
        />
        <ProductImageContainer
          rectangle14="/rectangle-20@2x.png"
          powerbank="Mug"
        />
        <ProductImageContainer
          rectangle14="/rectangle-17@2x.png"
          powerbank="Game pad"
        />
      </div>
    </div>
  );
};

export default ProductsDisplay;
