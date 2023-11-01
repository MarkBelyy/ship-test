import React, { FC } from "react";
import "./ShipInfo.scss";
import { GetOneShip } from "../ShipMain/ShipMain.generated";

const ShipInfo: FC<GetOneShip> = (data) => {
  return (
    <div className="info">
      <div className="info-description">
        <img
          className="nation-img"
          src={data.vehicle?.nation?.icons?.small}
          alt={data.vehicle?.nation?.name || "nation"}
        />
        <span>{data.vehicle?.description}</span>
      </div>
    </div>
  );
};

export default ShipInfo;
