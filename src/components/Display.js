import React from 'react';

const Display = (props) => {
    const displayStyle = {
        border: "1px solid gray",
        // padding: 10,
        padding: "20px",
        height: "200px", // can set style in a variable
    };
    return (
        <div style={displayStyle}>
            {/* or can set style like below */}
            <h2 style={{color: "gray"}}>{props.content}</h2>
        </div>
    );
};

export default Display;