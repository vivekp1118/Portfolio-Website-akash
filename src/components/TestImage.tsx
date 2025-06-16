import React from "react";

const TestImage = () => {
    return (
        <div className="p-4">
            <h2>Testing Image Loading</h2>
            <img
                src="https://iamops.io/wp-content/uploads/2024/06/Azure.svg"
                alt="Azure"
                className="w-16 h-16"
                onError={(e) => {
                    console.error("Image failed to load");
                    e.currentTarget.style.display = "none";
                }}
                onLoad={() => {
                    console.log("Image loaded successfully");
                }}
            />
        </div>
    );
};

export default TestImage;
