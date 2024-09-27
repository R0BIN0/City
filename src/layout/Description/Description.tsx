"use client";
import "./Description.css";
import { useDescription } from "./Description.logic";

const Description = () => {
  useDescription();
  return (
    <section className="description-section">
      <div className="description-container">
        <div className="description-left">
          <div className="title-animation-overlay">
            <h2>Une aventure exceptionnelle pour petits et grands</h2>
          </div>
        </div>

        <div className="description-right">
          <p>
            Au cœur de la Laponie, cette ville féerique est bien plus qu&apos;une simple destination :{" "}
            <strong>c&apos;est le village officiel du Père Noël !</strong> Ici, la neige scintille toute l&apos;année, les
            aurores boréales dansent dans le ciel, et chaque instant est une invitation à retomber en enfance.{" "}
          </p>
          <p>
            <strong>
              Venez rencontrer le Père Noël en personne, traverser le cercle polaire arctique et vivre une aventure inoubliable
            </strong>{" "}
            où la féerie de Noël prend vie à chaque coin de rue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
