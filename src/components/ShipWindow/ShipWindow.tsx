import React, { FC } from "react";
import "./ShipWindow.scss";
import { GetOneShip } from "../ShipMain/ShipMain.generated";

const ShipWindow: FC<GetOneShip> = (data) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${data.vehicle?.icons?.large})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="window" style={backgroundImageStyle}>
      <h1 className="ship-title">{data.vehicle?.title.toUpperCase()}</h1>
    </div>
  );
};

export default ShipWindow;
