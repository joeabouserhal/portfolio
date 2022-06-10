import React from 'react'
import { GrMenu } from 'react-icons/gr'
import {FiMenu} from 'react-icons/fi'

var navBarItemStyle = 'navbar-item flex text-lg font-mono p-0.5 text-white cursor-pointer hover:text-slate-500 transition hover:scale-125';

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar flex p-6 gap-20 '>
                <div className='title'>
                    <p className='text-2xl font-mono text-white'>Portfolio.</p>
                </div>
                <div className='invisible md:visible lg:visible absolute right-5'>
                    <ul className='pr-2  flex gap-5'>
                        <GrMenu className='right-2 block md:hidden lg:hidden' />
                        <li /><a onClick={scrollToAboutMe} className={navBarItemStyle}>About Me.</a>
                        <li /><a className={navBarItemStyle}>Contact Me.</a>
                    </ul>
                </div>
                <div className='flex justify-end'>
                    <FiMenu size='2rem' color='white' className=' visible md:invisible lg:invisible absolute right-5 cursor-pointer' />
                </div>
            </nav>
        </header>
    )
}

function scrollToAboutMe() {
    const elementToView = document.getElementById("aboutMe");
    elementToView.scrollIntoView(); 
    }
export default Header