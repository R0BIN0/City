"use client";
import React from "react";
import "./JoinUs.css";
import Button from "@/components/Button/Button";
import { IPadding } from "@/interfaces/components/Button/IPadding";
import { useJoinUs } from "./JoinUs.logic";

const JoinUs = () => {
  useJoinUs();
  return (
    <section className="joinUs-section">
      <div className="joinUs-title-container">
        <div className="title-animation-overlay">
          <h2>
            Alors qu’est ce que vous attendez
            <br /> <span>Prenez votre traineau !</span>
          </h2>
        </div>
      </div>
      <div className="joinUs-btn-container">
        <div className="title-animation-overlay">
          <Button title="Réserver un traineau" padding={IPadding.L} />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
