import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div className="header">
        <div>
            <Navigation
                currentTab={currentTab}
                handleTabChange={handleTabChange}
            ></Navigation>
        </div>

        <div className ="headerTitle">
            <h1>Jacob Hopper's Portfolio</h1>
        </div>
    </div>
    );
}

export default Header;





