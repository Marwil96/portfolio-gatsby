import React from "react";

import styling from './common.module.scss'

const Header = (props) => {
    return (
        <div className={styling.Header}>
            <span> William Martinsson </span>
            <a href="#lab">Lab</a>
        </div>
    )
}

export default Header;