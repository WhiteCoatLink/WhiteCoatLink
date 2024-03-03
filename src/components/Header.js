import React, { useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { userImage } from '../assets'
import { useAuth0 } from '@auth0/auth0-react'
import { BiMenu } from 'react-icons/bi'

const navLinks = [
    { display: 'Home', path: '/' },
    { display: 'Find a Doctor', path: '/doctors' },
    { display: 'Services', path: '/services' },
    { display: 'Contact', path: '/contact' },
    { display: 'About', path: '/about' }
]

const Header = () => {
    const { loginWithPopup, user, isAuthenticated, logout } = useAuth0();
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        handleStickyHeader()
        return () => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu')
    }
    
    return (
        <header className='flex items-center justify-between header' ref={headerRef}>
            {/* LOGO */}
            <div className="container">
                <div className="flex items-center justify-between">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold text-black">WhiteCoat<span class="text-red-500">Link</span></h1>
                        {/* <p class="text-textColor">Your healthcare partner</p> */}
                    </div>

                    {/* MENU */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
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

                    {/* RIGHT NAVIGATION */}
                    <div className="flex items-center gap-4">
                        <div>
                            <Link to="/">
                                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                    {
                                        isAuthenticated ? (
                                            <div>
                                                <img
                                                    className="w-full h-full rounded-full"
                                                    src={user.picture}
                                                    alt={user.name}
                                                />
                                            </div>

                                        ) : (
                                            <div>
                                                <img
                                                    alt='user'
                                                    src={userImage}
                                                    className='object-cover w-full h-full rounded-full'
                                                />
                                            </div>
                                        )
                                    }
                                </figure>
                            </Link>
                        </div>
                        {/* LOGIN/LOGOUT BUTTON */}
                        <div>
                            {
                                isAuthenticated ? (
                                    <button onClick={() => logout()} className='py-2 bg-red-600 px-6 text-white font-[600] h-[44px] flex items-center justify-center  rounded-full'>Logout</button>
                                ) : (
                                    <button onClick={() => loginWithPopup()} className='py-2 bg-primaryColor px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-full'>Login</button>
                                )
                            }
                        </div>

                        {/* MOBILE VIEW */}
                        <span className='md:hidden' onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header