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
        <h1 className="ship-title">{data.vehicle?.title.toUpperCase()}</h1>
        <h4>Nation: {data.vehicle?.nation?.title}</h4>
        <h4>Type: {data.vehicle?.type?.title}</h4>
        <h4>Level: {data.vehicle?.level}</h4>
        <span>{data.vehicle?.description}</span>
      </div>
    </div>
  );
};

export default ShipInfo;
