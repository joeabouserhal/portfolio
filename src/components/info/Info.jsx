import React from 'react'
import ProfilePicture from '../../assets/Profile Picture.jpeg'
import {BsInstagram, BsGithub, BsLinkedin,BsFillFilePersonFill,BsChevronDown} from 'react-icons/bs'

const linkStyle = "hover:text-slate-500 transition hover:scale-110 cursor-pointer";

const Info = () => {
    return (
        <div>
            <div className='justify-center text-center flex-col'>
                <p className='text-center font-mono text-slate-400 text-md p-1 pt-20 sm:pt-10'>I am</p>
                <h1 className='text-center font-mono text-white text-4xl md:text-4xl p-1'>Joe Abou Serhal</h1>
            </div>
            <div className='hero container flex mx-auto justify-center pt-16 lg:pt-9'>
                <img className="rounded-full w-72 lg:w-72" src={ProfilePicture} />
            </div>
            <div className='justify-center text-center pt-20 lg:pt-8'>
                <ul className='justify-center flex gap-4'>
                    <li/><a href='https://www.instagram.com/joe.abou.serhal/' target="_blank"><BsInstagram size="2rem" className={linkStyle}/></a>
                    <li/><a href='https://github.com/joeabouserhal' target="_blank"><BsGithub size="2rem" className={linkStyle}/></a>
                    <li/><a href='https://www.linkedin.com/in/joe-abou-serhal-9b90361bb/'><BsLinkedin size="2rem" className={linkStyle}/></a>   
                    <li className='border border-white'/><a href='https://drive.google.com/file/d/1UB8CrplwY9lxhwdRPXBT-1RS-eAPrVAb/view?usp=sharing' target="_blank" className={linkStyle+'border border-white flex gap-2 font-mono'}><BsFillFilePersonFill size="2rem" className={linkStyle}/>My CV</a>
                </ul>
            </div>
            <div id="aboutMe" className='flex justify-center p-28'>
                <BsChevronDown size='1.5rem'/>
            </div>
            <div className='flex justify-center'>
                <p className='container flex text-md font-mono bg-slate-700 text-slate-300 mx-auto rounded-2xl p-4 max-w-md shadow-2xl lg:text-xl'>
                    "I'm a Computer Science student at Beirut Arab University.
                    I'm always looking for new challenges and opportunities to learn new things."
                </p>
            </div>
            <div className='flex justify-center p-28'>
                <BsChevronDown size='1.5rem'/>
            </div>
        </div>
    )
}

export default Info