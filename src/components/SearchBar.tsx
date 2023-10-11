import './searchBar.css'
import React from 'react'

interface SearchBarProps {
    setShowRecommendation? : React.Dispatch<React.SetStateAction<boolean>>,
    isHomePage? : boolean
}

export const SearchBar: React.FC<SearchBarProps> = ({setShowRecommendation, isHomePage}) => {
    const handleFocus = () => {
        if (setShowRecommendation !== undefined) {
            setShowRecommendation(true);
        } 
    }
    const handleBlur = () => {
        if (setShowRecommendation !== undefined) {
            setShowRecommendation(false);
        } 
    }
    const handleSubmit = () => {
        document.location = 'search';
    }
        return (
            <div className="SearchBar">
                <input 
                    onFocus={handleFocus}
                    onBlur = {handleBlur}
                    className={isHomePage !== undefined ? 'searchHome' : 'search'} 
                    placeholder='Search'/>
                    <button type = 'submit' onClick = {handleSubmit} className='searchButton'>
                        <img 
                        className={isHomePage !== undefined ? 'searchIconHome' : 'searchIcon'}  src='./searchIcon.png' alt='Search'/>
                    </button>
            </div>
        );
}