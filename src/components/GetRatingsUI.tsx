import React from "react";
import styles from "./getRatingsUI.module.css";

interface GetRatingsUIProps {
  Rating: number;
}

export const GetRatingsUI: React.FC<GetRatingsUIProps> = ({ Rating }) => {
  const starComponents = [];

  for (let i = 1; i <= 5; i++) {
    const starClassName =
      i <= Rating ? "fa fa-star checked" : "fa fa-star unchecked";
    starComponents.push(<span key={i} className={starClassName}></span>);
  }

  return <span className={styles.Stars}>{starComponents}</span>;
};
