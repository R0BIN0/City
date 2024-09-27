/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import MainPicture from "../../assets/images/main_picture.jpg";
import Image from "next/image";
import "./Main.css";
import Button from "@/components/Button/Button";
import { IPadding } from "@/interfaces/components/Button/IPadding";
import { useMain } from "./Main.logic";

const Main = () => {
  const logic = useMain();
  return (
    <section className="main-section">
      <Image
        className="main-picture"
        src={MainPicture}
        alt="Des chaînes de montagnes enneigées avec un ciel bleu partiellement nuageux"
        width={MainPicture.width}
        height={MainPicture.height}
        priority
        ref={logic.ref as any}
      />
      <div className="main-gradient"></div>
      <div className="main-content-container">
        <div className="title-animation-overlay">
          <h1>Rovaniemi</h1>
        </div>
        <div className="main-button-container">
          <div className="title-animation-overlay">
            <Button title="Réserver un traineau" padding={IPadding.L} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
