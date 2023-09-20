import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Porter Robinson back with Nurture sophomore album",
        "Music news - 9501 readers"
      )}
      {newsArticle("Elon Musk Subscription for X?", "X news - 2513 readers")}
      {newsArticle("Typescript vs Javascript", "Code - 6503 readers")}
      {newsArticle("Baldurs Gate 3", "Gaming - 1111 readers")}
    </div>
  );
};

export default Widgets;
