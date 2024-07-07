import { FunctionComponent } from "react";
import "./ProductImageContainer.css";

export type ProductImageContainerType = {
  className?: string;
  rectangle14?: string;
  powerbank?: string;

  /** Action props */
  onRectangleImageClick?: () => void;
};

const ProductImageContainer: FunctionComponent<ProductImageContainerType> = ({
  className = "",
  rectangle14,
  powerbank,
  onRectangleImageClick,
}) => {
  return (
    <div className={`product-image-container ${className}`}>
      <img
        className="product-image-container-child"
        loading="lazy"
        alt=""
        src={rectangle14}
        onClick={onRectangleImageClick}
      />
      <div className="product-name-container">
        <div className="powerbank">{powerbank}</div>
      </div>
    </div>
  );
};

export default ProductImageContainer;
