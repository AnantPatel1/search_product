import { faker } from "@faker-js/faker";
import React from "react";
import styles from "./recommendationBox.module.css";

interface RecommendationBoxProps {}

export const RecommendationBox: React.FC<RecommendationBoxProps> = () => {
  return (
    <div className={styles.RecommendationBoxWrapper}>
      <div className={styles.RecommendationBox}>
        <div className={styles.Header}>Latest Trends</div>
        <div className={styles.Trends}>
          <div className={styles.Trend}>
            <img
              className={styles.TrendImg}
              src={faker.image.sports(90, 122, true)}
              alt=""
            />
            <div className={styles.TrendName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className="Trend">
            <img
              className={styles.TrendImg}
              src={faker.image.sports(90, 122, true)}
              alt=""
            />
            <div className={styles.TrendName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className="Trend">
            <img
              className={styles.TrendImg}
              src={faker.image.sports(90, 122, true)}
              alt=""
            />
            <div className={styles.TrendName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className="Trend">
            <img
              className={styles.TrendImg}
              src={faker.image.sports(90, 122, true)}
              alt=""
            />
            <div className={styles.TrendName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className="Trend">
            <img
              className={styles.TrendImg}
              src={faker.image.sports(90, 122, true)}
              alt=""
            />
            <div className={styles.TrendName}>
              {faker.commerce.productName()}
            </div>
          </div>
        </div>
        <div className={styles.Header}>Popular Suggestions</div>
        <div className={styles.Suggestions}>
          <div className={styles.Suggestion}>
            <div className={styles.SuggestionName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className={styles.Suggestion}>
            <div className={styles.SuggestionName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className={styles.Suggestion}>
            <div className={styles.SuggestionName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className={styles.Suggestion}>
            <div className={styles.SuggestionName}>
              {faker.commerce.productName()}
            </div>
          </div>
          <div className={styles.Suggestion}>
            <div className={styles.SuggestionName}>
              {faker.commerce.productName()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
