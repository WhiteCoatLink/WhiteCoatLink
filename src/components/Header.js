import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { userImage } from '../assets'

const navLinks = [
    { display: 'Home', path: '/' },
    { display: 'Find a Doctor', path: '/doctors' },
    { display: 'Services', path: '/services' },
    { display: 'Contact', path: '/contact' },
    { display: 'About', path: '/about' }
]

const Header = () => {
    return (
        <header className='flex items-center justify-between header'>
            {/* LOGO */}
            <div className="container">
                <div className="flex items-center justify-between">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold text-black">WhiteCoat<span class="text-red-500">Link</span></h1>
                        <p class="text-textColor">Your healthcare partner</p>
                    </div>

                    {/* MENU */}
                    <div className="navigation">
                        <ul className="flex items-center menu gap-[2.7rem]">
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink to={link.path} exact className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 hover:text-primaryColor'}>{link.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* navright */}
                    <div className="flex items-center gap-4">
                        <div>
                            <Link to="/">
                                <figure className='w-[35px] h-[35px] rounded-full'>
                                    <img src={userImage} alt='' className='w-full rounded-full' />
                                </figure>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button className=''></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header