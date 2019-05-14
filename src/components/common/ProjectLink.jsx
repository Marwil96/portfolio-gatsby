import React from "react";

import styling from './index.module.scss'

const styling = {
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontFamily: 'sans-serif'
};

const ProjectLink = (props) => {
    return (
        <div className="ProjectLink" style={styling}>
            <span>props.label</span>
            <h3>props.title</h3>
        </div>
    )
}

export default ProjectLink;