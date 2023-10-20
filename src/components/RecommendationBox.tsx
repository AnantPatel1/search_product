import React from "react";
import { faker } from "@faker-js/faker";
import styles from "./recommendationBox.module.css";

interface RecommendationBoxProps {}

const generateRandomProduct = () => {
  return {
    productName: faker.commerce.productName(),
    imageUrl: faker.image.sports(90, 122, true),
  };
};

export const RecommendationBox: React.FC<RecommendationBoxProps> = () => {
  const trends = Array(5)
    .fill(null)
    .map(() => generateRandomProduct());

  const suggestions = Array(5)
    .fill(null)
    .map(() => generateRandomProduct());

  return (
    <div className={styles.RecommendationBoxWrapper}>
      <div className={styles.RecommendationBox}>
        <div className={styles.Header}>Latest Trends</div>
        <div className={styles.Trends}>
          {trends.map((trend, index) => (
            <div className={styles.Trend} key={index}>
              <img className={styles.TrendImg} src={trend.imageUrl} alt="" />
              <div className={styles.TrendName}>{trend.productName}</div>
            </div>
          ))}
        </div>
        <div className={styles.Header}>Popular Suggestions</div>
        <div className={styles.Suggestions}>
          {suggestions.map((suggestion, index) => (
            <div className={styles.Suggestion} key={index}>
              <div className={styles.SuggestionName}>
                {suggestion.productName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
