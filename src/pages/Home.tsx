import React, { useState } from 'react'
import { RecommendationBox } from '../components/RecommendationBox';
import { SearchBar } from '../components/SearchBar';
import './home.css'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
        const [showRecommendation, setshowRecommendation] = useState<boolean>(false)

        return (
            <div className="HomePage">
                <div className="HomeElements">
                    <div className="SearchBar">
                        <SearchBar 
                            setShowRecommendation={setshowRecommendation} 
                            isHomePage = {true}
                        />
                    </div>
                    {showRecommendation && <div className="RecommendationBoxHome">
                        <RecommendationBox />
                    </div>}
                </div>
                <img className='BgImage' src= "./ZeviBackground.jpg" alt='Background'/>
            </div>
        );
}