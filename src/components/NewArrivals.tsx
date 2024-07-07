import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NewArrivals.css";

export type NewArrivalsType = {
  className?: string;
};

const NewArrivals: FunctionComponent<NewArrivalsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onNewArrivalsContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRightArrowClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={`new-arrivals ${className}`}>
      <div className="new-arrivals-child" />
      <div className="new-arrivals1" onClick={onNewArrivalsContainerClick}>
        <div className="arrival-item-container">
          <img className="arrival-item-container-child" loading="lazy" alt="" />
          <div className="div4">(9)</div>
        </div>
        <div className="arrival-item-container1">
          <div className="rectangle-parent2">
            <img className="frame-child4" loading="lazy" alt="" />
            <div className="div5">(17)</div>
          </div>
          <div className="rectangle-parent3">
            <img
              className="frame-child5"
              loading="lazy"
              alt=""
              data-scroll-to="rectangleImage"
            />
            <div className="div6">(10)</div>
          </div>
        </div>
        <div className="arrival-item-container2">
          <img className="arrival-item-container-item" loading="lazy" alt="" />
          <div className="div7">(5)</div>
        </div>
      </div>
      <div className="arrival-navigation">
        <div className="wrapper-right-arrow1">
          <img
            className="right-arrow-icon1"
            loading="lazy"
            alt=""
            onClick={onRightArrowClick}
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
