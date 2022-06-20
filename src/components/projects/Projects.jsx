import React from 'react'
import Project from './Project'
import PickMeUpPhoto from '../../assets/PickMeUp.png'
import PortfolioPhoto from '../../assets/Portfolio.png'
import PortfolioPhoto2 from '../../assets/Portfolio no Photo.png'

import './Projects.css'


const Projects = () => {
    return (
        <div>
            <div className='title flex justify-center'>
                <h1 className='text-3xl font-mono'>Projects</h1>
            </div>
            <div className='projects flex flex-col gap-y-10 pt-16 lg:flex-col lg:justify-around lg:gap-x-0 xl:flex-row xl:justify-around'>
                <Project projectName="Pick Me Up" projectDescription="A carpooling and delivery mobile app based in Lebanon."
                technologies={['Flutter', 'OSM', 'Firebase']}
                projectImageURL={PickMeUpPhoto}
                projectURL="https://github.com/joeabouserhal/pickmeup" />
                <Project projectName="Portfolio" projectDescription="This current portfolio website."
                technologies={['Vite', 'React', 'TailwindCSS']}
                projectImageURL={PortfolioPhoto2}
                projectURL="https://github.com/joeabouserhal/portfolio" />
            </div>
        </div>
    )
}

export default Projects