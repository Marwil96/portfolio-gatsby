import React from "react";

import styling from './common.module.scss'

const MainTextBlock = (props) => {
    return (
        <div className={styling.MainTextBlock}>
            <h1>Design driven developer.<br/> Who believes in a world where developers and designers can live together. </h1>
            <span>A digital designer who loves to develop unique interactive experiences. Currently doing my internship at Momkai in Amsterdam.</span>
        </div>
    )
}

export default MainTextBlock;