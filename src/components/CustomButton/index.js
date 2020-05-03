import React from 'react';

import './index.scss';

const CustomButton = ({text, icon, handler}) => {
    return (
        <div
            className="custom-button"
            onClick={handler}
        >
            {icon}
            {text}
        </div>
    )
};

CustomButton.defaultProps = {
    handler: () => console.log('click')
};

export default CustomButton;
