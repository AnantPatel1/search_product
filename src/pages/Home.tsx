import React, { useState } from "react";
import { RecommendationBox } from "../components/RecommendationBox";
import { SearchBar } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [showRecommendation, setShowRecommendation] = useState<boolean>(false);
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/search");
  };

  return (
    <div className={styles.HomePage}>
      <div className={styles.HomeElements}>
        {" "}
        <div className={styles.SearchBar}>
          {" "}
          <SearchBar
            setShowRecommendation={setShowRecommendation}
            isHomePage={true}
          />
        </div>
        {showRecommendation && (
          <div className={styles.RecommendationBoxHome}>
            <RecommendationBox />
          </div>
        )}
      </div>
      <img
        className={styles.BgImage}
        src="./ZeviBackground.jpg"
        alt="Background"
      />{" "}
      <div className={`${styles.buttonBox} ${styles.SearchBar}`}>
        <button className={styles.homeButton} onClick={handelClick}>
          Products Page
        </button>{" "}
      </div>
    </div>
  );
};
