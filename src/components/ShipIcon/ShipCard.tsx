import React, {
  Dispatch,
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./ShipCard.scss";
// import { GetAnotherShip } from "../ShipMain/ShipMain.generated";

const ShipCard: FC<any> = ({ vehicle, setSelectedShip, index }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const move = useRef({ x: 0, y: 0 });
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

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    move.current = {
      x: event.pageX,
      y: event.pageY,
    };
    setIsMouseDown(true);
  };

  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    if (
      isMouseDown &&
      move.current.x === event.pageX &&
      move.current.y === event.pageY
    ) {
      setSelectedShip(index);
    }
    setIsMouseDown(false);
  };

  return (
    <div
      className="card"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <img
        className="nation-icon"
        src={vehicle?.nation?.icons?.small}
        alt={vehicle?.nation?.name || "nation"}
      />
      <img
        className="card-img"
        ref={imageRef}
        data-src={vehicle?.icons?.medium}
        alt={vehicle?.title}
      />
      <span className="card-level">{vehicle?.level}</span>
      <img
        className="type-icon"
        src={vehicle?.type?.icons?.default}
        alt={vehicle?.type?.name || "type-name"}
      />
    </div>
  );
};

export default ShipCard;
