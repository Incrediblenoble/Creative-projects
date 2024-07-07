import { FunctionComponent, useCallback } from "react";
import ProductImageContainer from "./ProductImageContainer";
import { useNavigate } from "react-router-dom";
import "./ProductsDisplay1.css";

export type ProductsDisplay1Type = {
  className?: string;
};

const ProductsDisplay1: FunctionComponent<ProductsDisplay1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRightArrowClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`products-display3 ${className}`}>
      <div className="products-display-item" />
      <div className="frame-parent2">
        <ProductImageContainer
          rectangle14="pending_16:11"
          powerbank="Office Chair"
        />
        <ProductImageContainer
          rectangle14="pending_16:12"
          powerbank="Head Phone"
        />
        <ProductImageContainer
          rectangle14="pending_16:13"
          powerbank="Bread Toaster"
        />
        <ProductImageContainer
          rectangle14="pending_16:18"
          powerbank="Microphone"
        />
      </div>
      <div className="product-display-navigation">
        <div className="wrapper-right-arrow2">
          <img
            className="right-arrow-icon2"
            alt=""
            onClick={onRightArrowClick}
          />
        </div>
      </div>
      <div className="frame-parent3">
        <ProductImageContainer
          rectangle14="pending_16:15"
          powerbank="Inverter"
        />
        <ProductImageContainer
          rectangle14="pending_16:16"
          powerbank="Cushion chair"
        />
        <ProductImageContainer
          rectangle14="pending_16:17"
          powerbank="Water purifier"
        />
        <ProductImageContainer
          rectangle14="pending_16:14"
          powerbank="Light bulb"
        />
      </div>
    </div>
  );
};

export default ProductsDisplay1;
