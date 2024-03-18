// Tabs.js
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs">
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? 'active' : ''}
                        onClick={() => handleClick(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
