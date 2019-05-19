import React from "react";

import styling from './common.module.scss'

const ProjectLink = (props) => {
    return (
        <a className='ProjectLink' className={styling.ProjectLink}>
            <span >{props.label}</span>
            <h3>{props.title}</h3>
        </a>
    )
}

export default ProjectLink;