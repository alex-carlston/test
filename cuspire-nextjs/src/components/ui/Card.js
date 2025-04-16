import React from 'react';

const Card = ({ title, text, icon }) => {
    return (
        <div className="card bg-light custom-card h-100">
            <div className="card-body text-center p-4">
                <div className="mb-3">{icon}</div>
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;