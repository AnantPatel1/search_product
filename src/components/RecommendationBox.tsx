import { faker } from '@faker-js/faker';
import React from 'react'
import './recommendationBox.css'

interface RecommendationBoxProps {

}

export const RecommendationBox: React.FC<RecommendationBoxProps> = () => {
    return (
        <div className="RecommendationBoxWrapper">
            <div className="RecommendationBox">
                <div className="Header">Latest Trends</div>
                <div className="Trends">
                    <div className="Trend">
                        <img className='TrendImg' src={faker.image.fashion(90, 122, true)} alt="" />
                        <div className="TrendName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src={faker.image.fashion(90, 122, true)} alt="" />
                        <div className="TrendName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src={faker.image.fashion(90, 122, true)} alt="" />
                        <div className="TrendName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src={faker.image.fashion(90, 122, true)} alt="" />
                        <div className="TrendName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src={faker.image.fashion(90, 122, true)} alt="" />
                        <div className="TrendName">{faker.commerce.productName()}</div>
                    </div>
                </div>
                <div className="Header">Popular Suggestions</div>
                <div className="Suggestions">
                    <div className="Suggestion">
                        <div className="SuggestionName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">{faker.commerce.productName()}</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">{faker.commerce.productName()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}