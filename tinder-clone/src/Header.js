import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';

function header() {
    return (
        <div className="header">
            <h2>I am a header</h2>
            <PersonIcon />
        </div>
    );
}

export default header
