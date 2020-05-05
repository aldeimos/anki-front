import React, { useState, useEffect } from 'react';

import './index.scss';

const FlipperLogo = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setToggle((prev) => !prev);
        }, 3500);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <div className={`flip-container ${toggle ? 'active' : null}`}>
            <div className="flipper">
                <div className="front">
                    Decks
                </div>
                <div className="back">
                    Колоды
                </div>
            </div>
        </div>
    )
};

export default FlipperLogo;
