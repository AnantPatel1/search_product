import React, { useState } from "react";
import { Product } from "../Models/Product";
import { GetRatingsUI } from "./GetRatingsUI";
import styles from "./productView.module.css";

interface ProductViewProps {
  p: Product;
}

export const ProductView: React.FC<ProductViewProps> = ({ p }) => {
  const [WishListed, setWishListed] = useState<boolean>(false);
  const [viewProduct, setViewProduct] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setViewProduct(true);
  };

  const handleMouseLeave = () => {
    setViewProduct(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setWishListed(!WishListed);
  };
  return (
    <div key={p._id} className={styles.Product}>
      <div className={styles.ProductImgWrapper}>
        <img
          className={styles.ProductImg}
          src={p.imageUrl}
          alt="Product"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <span className={styles.Wishlist} onClick={(e) => handleClick(e)}>
          {WishListed === true ? (
            <img
              src="./heartFilled.png"
              alt="wishlist"
              className={styles.WishlistIcon}
            />
          ) : (
            <img
              src="./heart.png"
              alt="wishlist"
              className={styles.WishlistIcon}
            />
          )}
        </span>
        {viewProduct && (
          <span className={styles.ViewProduct}>
            <span className={styles.ViewText}>View Product</span>
          </span>
        )}
      </div>
      <div className="ProductName">{p.name}</div>
      <div className="ProductPrice">
        <span className="OriginalPrice">Rs. {p.originalPrice}</span>
        <span className="DiscountedPrice"> Rs.{p.discountedPrice}</span>
      </div>
      <div className="ProductRating">
        <span className="RatingImg">
          <GetRatingsUI Rating={p.rating} />
        </span>
        <span className="Reviews">({p.reviews})</span>
      </div>
    </div>
  );
};
