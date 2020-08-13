import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
    iconColor: "red",
  },
  winter: {
    text: "Burp, its chilli",
    iconName: "snowflake",
    iconColor: "blue",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  // const text = season === "winter" ? "Burp, its chilli" : "Lets hit the beach";
  // const icon=season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <h1>
        <i className={`icon-left huge ${iconName} icon`} />
        {text}
        <i className={`icon-right huge ${iconName} icon`} />
      </h1>
    </div>
  );
};

export default SeasonDisplay;
