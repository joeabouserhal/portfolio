import React from 'react';
import ProfilePicture from '../../assets/Profile Picture.jpeg';
import { BsGithub, BsLinkedin, BsFillFilePersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Zoom } from 'react-reveal';
import Typical from 'react-typical';
import './Info.css';
import IntroText from './IntroText';
import Chevron from '../shared/Chevron';

const linkStyle =
  'hover:text-slate-500 transition hover:scale-110 cursor-pointer';

const Info = () => {
  const linkMotion = { scale: 1.2, y: -10 };

  let scrollToTechnologies = () => {
    const elementToView = document.getElementById('technologies');
    elementToView.scrollIntoView();
  };

  return (
    <div className="info h-[100vh] pt-[10vh] content-center" id='aboutMe'>
      <div className="flex-col pt-[2vh]">
        <p className="text-slate-400 text-md">Hi, I am</p>
        <Typical
          className=" text-white text-2xl lg:text-4xl md:text-4xl"
          steps={['Joe Abou Serhal 👋']}
          wrapper="p"
        />
        <IntroText />
      </div>
      <Zoom>
        <div className="hero container flex mx-auto h-auto justify-center py-[3vh]">
          <motion.img
            src={ProfilePicture}
            whileHover={{ scale: 1.1 }}
            className="rounded-full w-[35vh] h-[35vh] inline"
          />
        </div>
      </Zoom>
      <div className="pt-[3vh]">
        <ul className="justify-center flex gap-4">
          <li />
          <motion.a whileHover={linkMotion}>
            <a href="https://github.com/joeabouserhal" target="_blank">
              <BsGithub size="2rem" className={linkStyle} />
            </a>
          </motion.a>
          <li />
          <motion.a whileHover={linkMotion}>
            <a href="https://www.linkedin.com/in/joe-abou-serhal-9b90361bb/">
              <BsLinkedin size="2rem" className={linkStyle} />
            </a>
          </motion.a>
          <li className="border border-white" />
          <motion.a whileHover={linkMotion}>
            <a
              href="https://drive.google.com/file/d/1MmOSuEc3MFKFfCdN0Xgvbb92gRJl89R6/view?usp=sharing"
              target="_blank"
              className={linkStyle + 'border border-white flex gap-2 font-mono'}
            >
              <BsFillFilePersonFill size="2rem" className={linkStyle} />
              My CV
            </a>
          </motion.a>
        </ul>
      </div>
      <Chevron func={scrollToTechnologies} />
    </div>
  );
};

export default Info;
