import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpaceMission from "../graphql";
import "./Card.css";


const Card = () => {
  const [data, SetData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    SetData(spaceMissions);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);

  console.log(data);
  return (
    <div className="container">
      {data.map((item) => (
        <>
          <div className="section">
            <img
              src={
                item && item.ships[0] && item.ships[0].image
                  ? item.ships[0].image
                  : "https://upload.wikimedia.org/wikipedia/commons/a/ac/LC39A_and_LC39B.jpg"
              }
            />
            <a href="/rocket">
              <h3>{item.mission_name}</h3>
            </a>
            <p>{item.rocket.rocket_name}</p>
            <p>{item.launch_site.site_name_long}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
