"use client";
import { IActivityCard } from "@/interfaces/components/ActivityCard/IActivityCard";
import React from "react";
import "./ActivityCard.css";
import { useActivityCard } from "./ActivityCard.logic";

const ActivityCard = (props: IActivityCard) => {
  const logic = useActivityCard(props);

  const UI = {
    guide: props.guided ? "Guidé" : "Non guidé",
  };

  const animations = {
    transform: `rotate(${props.animation.rotateEnd}deg)`,
    marginTop: `${props.animation.yEnd}px`,
  };

  return (
    <div
      className="activityCard-container"
      ref={logic.ref}
      style={{
        background: `url(${props.background})`,
        backgroundSize: "cover",
        ...animations,
      }}
    >
      <div className="activityCard-top">
        <div className="activityCard-guide">
          <p>{UI.guide} !</p>
        </div>
        <div className="activityCard-price">
          <p>
            à partir de <strong>{props.price}€</strong>
          </p>
        </div>
      </div>
      <div className="activityCard-bottom">
        <div className="activityCard-title">
          <p>{props.title}</p>
        </div>
        <div className="activityCard-time">
          <p>
            {`${props.time.day} ${props.time.day > 1 ? "Jours" : "Jour"}`} /{" "}
            {`${props.time.night} ${props.time.night > 1 ? "Nuits" : "Nuit"}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
