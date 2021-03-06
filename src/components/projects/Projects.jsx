import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Fade } from 'react-reveal'
import Project from './Project'
import PickMeUpPhoto from '../../assets/PickMeUp.png'
import PortfolioPhoto from '../../assets/Portfolio.png'
import PortfolioPhoto2 from '../../assets/Portfolio no Photo.png'

import './Projects.css'


const Projects = () => {
    return (
        <div>
            <Fade bottom>
                <div className='title flex justify-center'>
                    <h1 className='text-3xl'>Projects</h1>
                </div>
                <div className='projects flex flex-col gap-y-10 pt-16 lg:flex-col lg:justify-evenly lg:gap-x-0 xl:flex-row'>
                    <Project projectName="Pick Me Up" projectDescription="A carpooling and delivery mobile app based in Lebanon."
                        technologies={['Flutter', 'OSM', 'Firebase']}
                        projectImageURL={PickMeUpPhoto}
                        projectURL="https://github.com/joeabouserhal/pickmeup" />
                    <Project projectName="Portfolio" projectDescription="This current portfolio website."
                        technologies={['Vite', 'React', 'TailwindCSS']}
                        projectImageURL={PortfolioPhoto2}
                        projectURL="https://github.com/joeabouserhal/portfolio" />
                </div>
            </Fade>
            <div className='flex justify-center p-28'>
                <BsChevronDown id='contactMe' size='1.5rem' onClick={scrollToContactMe} />
            </div>
        </div>
    )
}

function scrollToContactMe() {
    const elementToView = document.getElementById("contactMe");
    elementToView.scrollIntoView();
}

export default Projects