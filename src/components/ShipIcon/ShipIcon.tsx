import React, { FC, useEffect, useRef } from "react";
import "./ShipIcon.scss";

const ShipIcon: FC<any> = (vehicle) => {
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

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="icon">
      <h3>{vehicle.title}</h3>
      <img
        className={"icon-img"}
        ref={imageRef}
        data-src={vehicle.icons.medium}
        alt={vehicle.title}
      />
    </div>
  );
};

export default ShipIcon;
