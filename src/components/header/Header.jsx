import React, { useState } from 'react'
import { GrMenu } from 'react-icons/gr'
import { FiMenu, FiX } from 'react-icons/fi'

var navBarItemStyle = 'navbar-item flex text-md font-mono p-0.5 text-white cursor-pointer hover:text-slate-500 transition hover:scale-125';

const Header = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <header className='header'>
            <nav className='relative navbar flex flex-col p-4 gap-20 '>
                <div className='flex'>
                    <div className='title'>
                        <p className='text-xl font-mono text-white'>Portfolio.</p>
                    </div>
                    <div className='invisible md:visible lg:visible absolute right-5'>
                        <ul className='flex gap-5'>
                            <GrMenu className='right-2 block md:hidden lg:hidden' />
                            <li /><a onClick={scrollToAboutMe} className={navBarItemStyle}>About Me.</a>
                            <li /><a className={navBarItemStyle}>Contact Me.</a>
                        </ul>
                    </div>
                    <div className='flex justify-end'>
                        {navBarOpen ?
                            <FiX size='2rem' color='white' className=' visible md:invisible lg:invisible absolute right-5 cursor-pointer' onClick={() => setNavBarOpen(!navBarOpen)} /> :
                            <FiMenu size='2rem' color='white' className=' visible md:invisible lg:invisible absolute right-5 cursor-pointer' onClick={() => setNavBarOpen(!navBarOpen)} />}
                    </div>
                </div>

                <div className={(navBarOpen ? 'visible md:hidden justify-center' : 'hidden')}>
                    <ul className='flex flex-col gap-2 items-center justify-center'>
                        <li /><a onClick={scrollToAboutMe} className={navBarItemStyle}>About Me.</a>
                        <li /><a className={navBarItemStyle}>Contact Me.</a>
                    </ul>
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