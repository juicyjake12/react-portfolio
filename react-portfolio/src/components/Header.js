import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <div>
                <h1>My Portfolio</h1>
            </div>

            <div>
                <Navigation
                    currentTab={currentTab}
                    handleTabChange={handleTabChange}
                ></Navigation>
            </div>

            <div>
                <h2>Welcome</h2>
                <p>This is my portfolio.</p>
            </div>
        </div>
    );
}

export default Header;