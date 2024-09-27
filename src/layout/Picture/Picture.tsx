"use client";
import Image from "next/image";
import React from "react";
import PictureImage from "../../assets/images/picture-image-section.jpg";
import "./Picture.css";
import { usePicture } from "./Picture.logic";

const Picture = () => {
  usePicture();
  return (
    <section className="picture-section">
      <div className="picture-title-container">
        <div className="title-animation-overlay">
          <h2>
            Partez à la découverte <br /> du <span>Père Noel !</span>
          </h2>
        </div>
      </div>
      <div className="picture-image-container">
        <Image
          className="picture-image"
          src={PictureImage}
          alt="Deux chalets en bois sous des aurores boréales"
          width={PictureImage.width}
          height={PictureImage.height}
          priority
        />
      </div>
    </section>
  );
};

export default Picture;
