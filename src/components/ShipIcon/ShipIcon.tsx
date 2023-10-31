import React, { Dispatch, FC, useEffect, useRef } from "react";
import "./ShipIcon.scss";
import { GetAnotherShip } from "../ShipMain/ShipMain.generated";

const ShipIcon: FC<any> = ({ vehicle, setSelectedShip, index }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          lazyImage.src = lazyImage.dataset.src || "";
          observer.unobserve(lazyImage);
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    console.log(vehicle?.icons?.medium);
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="icon" onClick={() => setSelectedShip(index)}>
      <h3>{vehicle?.title}</h3>
      <img
        className={"icon-img"}
        ref={imageRef}
        data-src={vehicle?.icons?.medium}
        alt={vehicle?.title}
      />
    </div>
  );
};

export default ShipIcon;
