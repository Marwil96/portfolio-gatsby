import React from "react";

import styling from './common.module.scss'

const ProjectLink = (props) => {
    return (
        <a className={styling.ContactLink}>
        	<h3>{props.title}</h3>
            <span >{props.label}</span>
        </a>
    )
}

export default ProjectLink;