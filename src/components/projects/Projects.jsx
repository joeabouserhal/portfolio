import React from 'react';
import { Fade } from 'react-reveal';
import Project from './Project';
import PickMeUpPhoto from '../../assets/PickMeUp.png';
import PortfolioPhoto2 from '../../assets/Portfolio no Photo.png';
import BugHunterPhoto from '../../assets/Bug Hunter.png';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects">
      <Fade bottom>
        <div className="title flex justify-center">
          <h1 className="text-3xl">Projects</h1>
        </div>
        <div className="projects flex flex-col gap-y-10 pt-16 lg:flex-col lg:justify-evenly lg:gap-x-0 xl:flex-row">
          <Project
            projectName="Pick Me Up"
            projectDescription="A carpooling and delivery mobile app based in Lebanon."
            technologies={['Flutter', 'OSM', 'Firebase']}
            projectImageURL={PickMeUpPhoto}
            projectURL="https://github.com/joeabouserhal/pickmeup"
          />
          <Project
            projectName="Portfolio"
            projectDescription="This current portfolio website."
            technologies={['Vite', 'React', 'TailwindCSS']}
            projectImageURL={PortfolioPhoto2}
            projectURL="https://github.com/joeabouserhal/portfolio"
          />
          <Project
            projectName="Bug Hunter"
            projectDescription="A bug bounty website"
            technologies={['TypeScript', 'React', 'TailwindCSS']}
            projectImageURL={BugHunterPhoto}
            projectURL="https://www.bughunter.network/"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
