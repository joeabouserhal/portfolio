import React from 'react'
import Project from './Project'


const Projects = () => {
    return (
        <div>
            <div className='title flex justify-center'>
                <h1 className='text-3xl font-mono'>Projects</h1>
            </div>
            <div className='projects flex grid-flow-col justify-around gap-20 pt-16 '>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default Projects