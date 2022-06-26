import React from "react";
import './Project.css'

const Project = ({ projectName, projectDescription, projectImageURL, technologies, projectURL }) => {

    const containerStyle = 'container bg-slate-700 text-slate-300 mx-auto w-auto h-auto rounded-2xl p-5 max-w-sm shadow-2xl lg:w-80 lg:text-xl';

    return (
        <div className="project">
            <div className={containerStyle}>
                <div className="w-30 h-30 rounded-xl flex justify-center">
                    <a href={projectURL} target="_blank">
                        <img className="rounded-xl transition hover:scale-90" src={projectImageURL} />
                    </a>
                </div>
                <h3 className="title text-2xl p-2 underline-dotted">{projectName}</h3>
                <p className="description text-base">
                    {projectDescription}
                </p>
                <p className="underline-dotted p-2"></p>
                <ul className="text-base flex grid-flow-row gap-2 justify-center">
                    {technologies.map(tech => <li className="container bg-slate-600 h-auto w-auto p-2 text-sm rounded-xl" key={tech}>{tech}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Project