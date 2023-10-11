import React, { useEffect, useState } from 'react'
import './searchResults.css'
import { SearchBar } from '../components/SearchBar';
import { GetRatingsUI } from '../components/GetRatingsUI';
import { Product } from '../Models/Product';
import { GetProducts } from '../DataGenerator/GetProducts';
import { ProductView } from '../components/ProductView';

interface SearchResultsProps {

}

export const SearchResults: React.FC<SearchResultsProps> = () => {
        const [products, setProducts] = useState<Product[]>();
        const [brand, setBrand] = useState<string>('All');
        const [maxPrice, setMaxPrice] = useState<string>('1000');
        const [rating, setRating] = useState<string>('5');

        useEffect(() => {
          let minPrice = maxPrice === '1000' ? 500 : 1;
          setProducts(GetProducts(brand,minPrice,parseFloat(maxPrice),parseInt(rating)));
        }, [brand, maxPrice, rating])
        
        const handleBrandChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            setBrand(e.target.value);
        }

        const handlePriceChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            setMaxPrice(e.target.value);
        }

        const handleRatingChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            setRating(e.target.value);
        }

        return (
            <div className="SearchResults">
                <div className="SearchBar">
                    <SearchBar />
                </div>
                <br />
                <br />
                <div className="SearchResultsHeader">
                    Search Results
                </div>
                <div className="Container">
                    <div className="Filters">
                        <div className="Filter">
                            <div className="FilterHeader">
                                <span className="FilterName">BRAND</span>
                                <img src="./expandIcon.png" alt="Expand" className='ExpandIcon'/>
                            </div>
                            <div className="FilterOptions">
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handleBrandChange(e)}
                                    className='FilterCheckbox' id = "Mango" type='radio' name='brand' value='Mango'/> 
                                    <label htmlFor="Mango">Mango</label>
                                </div>
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handleBrandChange(e)}
                                    className='FilterCheckbox' id = "H&M" type='radio' name='brand' value= 'H&M' />
                                    <label htmlFor="H&M">H&M</label>
                                </div>
                            </div>
                        </div>
                        <div className="Filter">
                            <div className="FilterHeader">
                                <span className="FilterName">PRICE RANGE</span>
                                <img src="./expandIcon.png" alt="Expand" className='ExpandIcon'/>
                            </div>
                            <div className="FilterOptions">
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handlePriceChange(e)}
                                    className='FilterCheckbox' id = "price500" type='radio' name='price' value='500'/> 
                                    <label htmlFor="price500">Under 500</label>
                                </div>
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handlePriceChange(e)}
                                    className='FilterCheckbox' id = "price1000" type='radio' name='price' value= '1000' />
                                    <label htmlFor="price1000">500 to 1000</label>
                                </div>
                            </div>
                        </div>
                        <div className="Filter">
                            <div className="FilterHeader">
                                <span className="FilterName">RATINGS</span>
                                <img src="./expandIcon.png" alt="Expand" className='ExpandIcon'/>
                            </div>
                            <div className="FilterOptions">
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handleRatingChange(e)}
                                    className='FilterCheckbox' type='radio' name='rating' id = "5*" value='5'/> 
                                    <label htmlFor="5*">
                                        <GetRatingsUI Rating={5}/>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handleRatingChange(e)}
                                    className='FilterCheckbox' type='radio' name='rating' id = "4*" value='4'/> 
                                    <label htmlFor="4*">
                                        <GetRatingsUI Rating={4}/>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handleRatingChange(e)}
                                    className='FilterCheckbox' type='radio' name='rating' id = "3*" value='3'/> 
                                    <label htmlFor="3*">
                                        <GetRatingsUI Rating={3}/> 
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handleRatingChange(e)}
                                    className='FilterCheckbox' type='radio' name='rating' id = "2*" value='2'/> 
                                    <label htmlFor="2*">
                                        <GetRatingsUI Rating={2}/> 
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input 
                                    onChange={(e) => handleRatingChange(e)}
                                    className='FilterCheckbox' type='radio' name='rating' id = "1*" value='1'/> 
                                    <label htmlFor="1*">
                                        <GetRatingsUI Rating={1}/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Products">
                        {
                            products?.map((p) => (
                                <ProductView p = {p} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
}