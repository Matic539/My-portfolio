import React from 'react';

const CustomArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#00ffee', width: '40px', height: '40px', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

export default CustomArrow;
