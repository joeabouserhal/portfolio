import React from 'react'
import ProfilePicture from '../../assets/Profile Picture.jpeg'
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'

const linkStyle = "hover:text-slate-500 transition hover:scale-110 cursor-pointer";

const Info = () => {
    return (
        <div>
            <div className='justify-center text-center flex-col lg:pt-7'>
                <p className='text-center font-mono text-slate-400 text-2xl p-1 pt-16'>I am</p>
                <h1 className='text-center font-mono text-white text-9xl md:text-5xl p-2'>Joe Abou Serhal</h1>
            </div>
            <div className='hero container flex mx-auto justify-center pt-6 lg:pt-10'>
                <img className="rounded-full w-72 lg:w-96" src={ProfilePicture} />
            </div>
            <div className='justify-center text-center pt-12 lg:pt-12'>
                <ul className='justify-center flex gap-4'>
                    <li/><a href='https://www.instagram.com/joe.abou.serhal/' target="_blank"><BsInstagram size="2.5rem" className={linkStyle}/></a>
                    <li/><a href='https://github.com/joeabouserhal' target="_blank"><BsGithub size="2.5rem" className={linkStyle}/></a>
                    <li/><a href='https://www.linkedin.com/in/joe-abou-serhal-9b90361bb/'><BsLinkedin size="2.5rem" className={linkStyle}/></a>
                </ul>
            </div>
            <div className='description justify-center content-center pt-80 lg:pt-56'>
                <p id="aboutMe" className='text-md font-mono bg-slate-700 text-slate-300 mx-auto rounded-2xl p-5 h-50 max-w-sm shadow-2xl lg:text-xl'>
                    "I am a full Computer Science student at Beirut Arab University.{"\n"}
                    I'm always looking for new challenges and opportunities to learn new things."
                </p>
            </div>
        </div>
    )
}

export default Info