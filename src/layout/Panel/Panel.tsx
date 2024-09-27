/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import PicturePanel from "../../assets/images/picture_panel.png";
import Image from "next/image";
import "./Panel.css";
import { v4 as uuidv4 } from "uuid";
import { usePanel } from "./Panel.logic";

const Panel = () => {
  const { addRef } = usePanel();
  return (
    <section className="panel-section">
      {Array.from({ length: 5 }).map(() => (
        <Image
          ref={addRef as any}
          key={uuidv4()}
          src={PicturePanel}
          alt="Des montagnes enneigées sur lac bleu"
          width={PicturePanel.width}
          height={PicturePanel.height}
          priority
        />
      ))}
    </section>
  );
};

export default Panel;
