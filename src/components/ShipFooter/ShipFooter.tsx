import React, { FC, useRef, MouseEvent, useState, Dispatch } from "react";
import { GetShipListQuery } from "../ShipMain/ShipMain.generated";
import { ApolloError } from "@apollo/client";
import ShipCard from "../ShipIcon/ShipCard";
import "./ShipFooter.scss";

const ShipFooter: FC<{
  shipList: GetShipListQuery;
  loading: boolean;
  error: ApolloError | undefined;
  setSelectedShip: Dispatch<React.SetStateAction<number>>;
}> = ({ shipList, loading, error, setSelectedShip }) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseDown = () => {
    setIsDragging(true);
  };
  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const container = containerRef.current;
      if (container) {
        container.scrollLeft -= event.movementX;
      }
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      const containerScrollPosition = container.scrollLeft;
      container.scrollTo({
        top: 0,
        left: containerScrollPosition + event.deltaY * 5,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={isDragging ? "footer footer-grab" : "footer"}
      ref={containerRef}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {shipList?.vehicles?.map((vehicle, index) => (
        <ShipCard
          key={vehicle?.title}
          setSelectedShip={setSelectedShip}
          index={index}
          vehicle={vehicle}
        />
      ))}
    </div>
  );
};

export default ShipFooter;
