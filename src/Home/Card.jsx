import React from 'react'
import './Card.css'

const Card = ({tittle,para,image}) => {
    return (
        <div>
            <div className="col p-3  d-flex justify-content-center">
                <div className="slide-card shadow-lg">
                    <img src={image} alt="Card Image" />
                    <div className="card-content d-flex flex-column text-center">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{para}.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
