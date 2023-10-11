import React from "react";
import styles from "./searchBar.module.css";

interface SearchBarProps {
  setShowRecommendation?: React.Dispatch<React.SetStateAction<boolean>>;
  isHomePage?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  setShowRecommendation,
  isHomePage,
}) => {
  const handleFocus = () => {
    if (setShowRecommendation !== undefined) {
      setShowRecommendation(true);
    }
  };
  const handleBlur = () => {
    if (setShowRecommendation !== undefined) {
      setShowRecommendation(false);
    }
  };
  const handleSubmit = () => {
    document.location = "search";
  };

  return (
    <div className={styles.SearchBar}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={isHomePage !== undefined ? styles.searchHome : styles.search}
        placeholder="Search"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className={styles.searchButton}
      >
        <img
          className={
            isHomePage !== undefined ? styles.searchIconHome : styles.searchIcon
          }
          src="./searchIcon.png"
          alt="Search"
        />
      </button>
    </div>
  );
};
