// import React, { useEffect, useState } from "react";
// import styles from "./searchResults.module.css";
// import { SearchBar } from "../components/SearchBar";
// import { GetRatingsUI } from "../components/GetRatingsUI";
// import { Product } from "../Models/Product";
// import { GetProducts } from "../DataGenerator/GetProducts";
// import { ProductView } from "../components/ProductView";

// interface SearchResultsProps {}

// export const SearchResults: React.FC<SearchResultsProps> = () => {
//   const [products, setProducts] = useState<Product[]>();
//   const [brand, setBrand] = useState<string>("All");
//   const [maxPrice, setMaxPrice] = useState<string>("1000");
//   const [rating, setRating] = useState<string>("5");

//   useEffect(() => {
//     let minPrice = maxPrice === "1000" ? 500 : 1;
//     setProducts(
//       GetProducts(brand, minPrice, parseFloat(maxPrice), parseInt(rating))
//     );
//   }, [brand, maxPrice, rating]);

//   const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setBrand(e.target.value);
//   };

//   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMaxPrice(e.target.value);
//   };

//   const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRating(e.target.value);
//   };

//   return (
//     <div className={styles.SearchResults}>
//       <div className={styles.SearchBar}>
//         <SearchBar />
//       </div>
//       <br />
//       <br />
//       <div className={styles.SearchResultsHeader}>Search Results</div>
//       <div className={styles.Container}>
//         <div className={styles.Filters}>
//           <div className={styles.Filter}>
//             <div className={styles.FilterHeader}>
//               <span className={styles.FilterName}>BRAND</span>
//               <img
//                 src="./expandIcon.png"
//                 alt="Expand"
//                 className={styles.ExpandIcon}
//               />
//             </div>
//             <div className={styles.FilterOptions}>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handleBrandChange(e)}
//                   className={styles.FilterCheckbox}
//                   id="Mango"
//                   type="radio"
//                   name="brand"
//                   value="Boots"
//                 />
//                 <label htmlFor="Boots">Boot</label>
//               </div>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handleBrandChange(e)}
//                   className={styles.FilterCheckbox}
//                   id="H&M"
//                   type="radio"
//                   name="brand"
//                   value="Football"
//                 />
//                 <label htmlFor="Football">Football</label>
//               </div>
//             </div>
//           </div>
//           <div className={styles.Filter}>
//             <div className={styles.FilterHeader}>
//               <span className={styles.FilterName}>PRICE RANGE</span>
//               <img
//                 src="./expandIcon.png"
//                 alt="Expand"
//                 className={styles.ExpandIcon}
//               />
//             </div>
//             <div className={styles.FilterOptions}>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handlePriceChange(e)}
//                   className={styles.FilterCheckbox}
//                   id="price500"
//                   type="radio"
//                   name="price"
//                   value="500"
//                 />
//                 <label htmlFor="price500">Under ₹500</label>
//               </div>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handlePriceChange(e)}
//                   className={styles.FilterCheckbox}
//                   id="price1000"
//                   type="radio"
//                   name="price"
//                   value="1000"
//                 />
//                 <label htmlFor="price1000">₹500 to ₹1000</label>
//               </div>
//             </div>
//           </div>
//           <div className={styles.Filter}>
//             <div className={styles.FilterHeader}>
//               <span className={styles.FilterName}>RATINGS</span>
//               <img
//                 src="./expandIcon.png"
//                 alt="Expand"
//                 className={styles.ExpandIcon}
//               />
//             </div>
//             <div className={styles.FilterOptions}>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handleRatingChange(e)}
//                   className={styles.FilterCheckbox}
//                   type="radio"
//                   name="rating"
//                   id="5*"
//                   value="5"
//                 />
//                 <label htmlFor="5*">
//                   <GetRatingsUI Rating={5} />
//                 </label>
//               </div>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handleRatingChange(e)}
//                   className={styles.FilterCheckbox}
//                   type="radio"
//                   name="rating"
//                   id="4*"
//                   value="4"
//                 />
//                 <label htmlFor="4*">
//                   <GetRatingsUI Rating={4} />
//                 </label>
//               </div>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handleRatingChange(e)}
//                   className={styles.FilterCheckbox}
//                   type="radio"
//                   name="rating"
//                   id="3*"
//                   value="3"
//                 />
//                 <label htmlFor="3*">
//                   <GetRatingsUI Rating={3} />
//                 </label>
//               </div>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handleRatingChange(e)}
//                   className={styles.FilterCheckbox}
//                   type="radio"
//                   name="rating"
//                   id="2*"
//                   value="2"
//                 />
//                 <label htmlFor="2*">
//                   <GetRatingsUI Rating={2} />
//                 </label>
//               </div>
//               <div className={styles.FilterOption}>
//                 <input
//                   onChange={(e) => handleRatingChange(e)}
//                   className={styles.FilterCheckbox}
//                   type="radio"
//                   name="rating"
//                   id="1*"
//                   value="1"
//                 />
//                 <label htmlFor="1*">
//                   <GetRatingsUI Rating={1} />
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.Products}>
//           {products?.map((p) => (
//             <ProductView p={p} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import styles from "./searchResults.module.css";
import { SearchBar } from "../components/SearchBar";
import { GetRatingsUI } from "../components/GetRatingsUI";
import { Product } from "../Models/Product";
import { GetProducts } from "../DataGenerator/GetProducts";
import { ProductView } from "../components/ProductView";

interface SearchResultsProps {}

export const SearchResults: React.FC<SearchResultsProps> = () => {
  const [filters, setFilters] = useState({
    brand: "All",
    maxPrice: "1000",
    rating: "5",
  });
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    let minPrice = filters.maxPrice === "1000" ? 500 : 1;
    setProducts(
      GetProducts(
        filters.brand,
        minPrice,
        parseFloat(filters.maxPrice),
        parseInt(filters.rating)
      )
    );
  }, [filters]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters({ ...filters, [filterName]: value });
  };

  return (
    <div className={styles.SearchResults}>
      <div className={styles.SearchBar}>
        <SearchBar />
      </div>
      <br />
      <br />
      <div className={styles.SearchResultsHeader}>Search Results</div>
      <div className={styles.Container}>
        <div className={styles.Filters}>
          {/* Brand Filter */}
          {/* Replace "All" with your brand options */}
          <div className={styles.Filter}>
            <div className={styles.FilterHeader}>
              <span className={styles.FilterName}>BRAND</span>
              <img
                src="./expandIcon.png"
                alt="Expand"
                className={styles.ExpandIcon}
              />
            </div>
            <div className={styles.FilterOptions}>
              {["All", "Boots", "Football"].map((brandOption) => (
                <div className={styles.FilterOption} key={brandOption}>
                  <input
                    onChange={(e) => handleFilterChange("brand", brandOption)}
                    className={styles.FilterCheckbox}
                    type="radio"
                    name="brand"
                    value={brandOption}
                    checked={filters.brand === brandOption}
                  />
                  <label htmlFor={brandOption}>{brandOption}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className={styles.Filter}>
            <div className={styles.FilterHeader}>
              <span className={styles.FilterName}>PRICE RANGE</span>
              <img
                src="./expandIcon.png"
                alt="Expand"
                className={styles.ExpandIcon}
              />
            </div>
            <div className={styles.FilterOptions}>
              {["500", "1000"].map((priceOption) => (
                <div className={styles.FilterOption} key={priceOption}>
                  <input
                    onChange={(e) =>
                      handleFilterChange("maxPrice", priceOption)
                    }
                    className={styles.FilterCheckbox}
                    type="radio"
                    name="price"
                    value={priceOption}
                    checked={filters.maxPrice === priceOption}
                  />
                  <label htmlFor={`price${priceOption}`}>
                    Under ₹{priceOption}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Ratings Filter */}
          <div className={styles.Filter}>
            <div className={styles.FilterHeader}>
              <span className={styles.FilterName}>RATINGS</span>
              <img
                src="./expandIcon.png"
                alt="Expand"
                className={styles.ExpandIcon}
              />
            </div>
            <div className={styles.FilterOptions}>
              {[5, 4, 3, 2, 1].map((ratingOption) => (
                <div className={styles.FilterOption} key={ratingOption}>
                  <input
                    onChange={(e) =>
                      handleFilterChange("rating", String(ratingOption))
                    }
                    className={styles.FilterCheckbox}
                    type="radio"
                    name="rating"
                    value={String(ratingOption)}
                    checked={filters.rating === String(ratingOption)}
                  />
                  <label htmlFor={`${ratingOption}*`}>
                    <GetRatingsUI Rating={ratingOption} />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.Products}>
          {products?.map((p) => (
            <ProductView p={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
