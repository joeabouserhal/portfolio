import React from 'react'
import ProfilePicture from '../../assets/Profile Picture.jpeg'
import {BsInstagram, BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

const linkStyle = "hover:text-slate-500 transition cursor-pointer";

const Info = () => {
    return (
        <div>
            <div className='justify-center font-mono text-center flex-col pt-7'>
                <p className='text-center text-slate-400 text-xl p-1 pt-16'>I am</p>
                <h1 className='text-center text-white text-4xl md:text-5xl p-2'>Joe Abou Serhal</h1>
            </div>
            <div className='hero container flex mx-auto justify-center pt-10'>
                <img className="rounded-full w-72 lg:w-96" src={ProfilePicture} />
            </div>
            <div className='justify-center text-center pt-12'>
                <ul className='justify-center flex gap-2'>
                    <li/><a><BsInstagram size="2.5rem" className={linkStyle}/></a>
                    <li/><a><BsTwitter size="2.5rem" className={linkStyle}/></a>
                    <li/><a><BsGithub size="2.5rem" className={linkStyle}/></a>
                    <li/><a><BsLinkedin size="2.5rem" className={linkStyle}/></a>
                </ul>
            </div>
            <div className='description justify-center content-center pt-56'>
                <p id="aboutMe" className='text-md font-mono bg-slate-700 text-slate-300 mx-auto rounded-2xl p-5 h-50 max-w-sm shadow-2xl lg:text-xl'>
                    "I am a full Computer Science student at Beirut Arab University.{"\n"}
                    I'm always looking for new challenges and opportunities to learn new things."
                </p>
            </div>
        </div>
    )
}

export default Info