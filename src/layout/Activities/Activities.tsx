"use client";
import React from "react";
import "./Activities.css";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import { activities } from "./Activities.data";
import { useActivities } from "./Activities.logic";

const Activities = () => {
  useActivities();
  return (
    <section className="activities-section">
      <div className="activities-title-container">
        <div className="title-animation-overlay">
          <h2>
            Découvrez une liste d’activités
            <br /> <span>à couper le souffle !</span>
          </h2>
        </div>
      </div>
      <div className="activities-list-container">
        {activities.map((a, idx) => (
          <ActivityCard key={idx} {...a} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
