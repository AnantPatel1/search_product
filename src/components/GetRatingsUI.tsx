import React from 'react'
import './getRatingsUI.css'

interface GetRatingsUIProps {
    Rating : number
}

export const GetRatingsUI: React.FC<GetRatingsUIProps> = ({Rating}) => {
    if (Rating === 5) {
        return (
            <span className="Stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
            </span>
        )
    }
    if (Rating === 4) {
        return (
            <span className="Stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
            </span>
        )
    }
    else if (Rating === 3) {
        return (
            <span className="Stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
            </span>
        )
    }
    else if (Rating === 2) {
        return (
            <span className="Stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
            </span>
        )
    }
    else {
        return (
            <span className="Stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
                <span className="fa fa-star unchecked"></span>
            </span>
        )
    }
}