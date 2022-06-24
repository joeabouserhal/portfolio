import React from 'react'
import ProfilePicture from '../../assets/Profile Picture.jpeg'
import { BsInstagram, BsGithub, BsLinkedin, BsFillFilePersonFill, BsChevronDown } from 'react-icons/bs'
import Typical from 'react-typical'
import './Info.css'

const linkStyle = "hover:text-slate-500 transition hover:scale-110 cursor-pointer";


const Info = () => {
    return (
        <div className='info'>
            <div className='justify-center text-center flex-col'>
                <p className='text-center font-mono text-slate-400 text-md p-1 pt-10'>Hi, I am</p>
                <Typical className='text-center font-mono text-white text-2xl lg:text-4xl md:text-4xl p-1'
                    steps={['Joe Abou Serhal 👋', 500]}
                    wrapper="p"
                />
            </div>
            <div className='hero container flex mx-auto justify-center pt-16 lg:pt-9'>
                <img className="rounded-full w-72 lg:w-72" src={ProfilePicture} />
            </div>
            <div className='justify-center text-center pt-20 lg:pt-8'>
                <ul className='justify-center flex gap-4'>
                    <li /><a href='https://www.instagram.com/joe.abou.serhal/' target="_blank"><BsInstagram size="2rem" className={linkStyle} /></a>
                    <li /><a href='https://github.com/joeabouserhal' target="_blank"><BsGithub size="2rem" className={linkStyle} /></a>
                    <li /><a href='https://www.linkedin.com/in/joe-abou-serhal-9b90361bb/'><BsLinkedin size="2rem" className={linkStyle} /></a>
                    <li className='border border-white' /><a href='https://drive.google.com/file/d/1MmOSuEc3MFKFfCdN0Xgvbb92gRJl89R6/view?usp=sharing' target="_blank" className={linkStyle + 'border border-white flex gap-2 font-mono'}><BsFillFilePersonFill size="2rem" className={linkStyle} />My CV</a>
                </ul>
            </div>
            <div className='flex justify-center p-28'>
                <BsChevronDown id="aboutMe" size='1.5rem' onClick={scrollToAboutMe}/>
            </div>
            <div className='flex justify-center'>
                <p className='container flex text-md font-mono bg-slate-700 text-slate-300 mx-auto rounded-2xl p-4 max-w-md shadow-2xl lg:text-xl'>
                    "I'm a Computer Science student at Beirut Arab University.
                    I'm always looking for new challenges and opportunities to learn new things."
                </p>
            </div>
            <div className='flex justify-center p-28'>
                <BsChevronDown id="technologies" size='1.5rem' onClick={scrollToTechnologies}/>
            </div>
        </div>
    )
}

function scrollToAboutMe() {
    const elementToView = document.getElementById("aboutMe");
    elementToView.scrollIntoView();
}

function scrollToTechnologies() {
    const elementToView = document.getElementById("technologies");
    elementToView.scrollIntoView();
}

export default Info