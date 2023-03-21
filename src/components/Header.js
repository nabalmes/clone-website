import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '.././assets/images/logo/website-logo.png'
import { BsTelephone, BsCart, BsSearch } from 'react-icons/bs'




export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const navToggle = () => {
        setIsActive(!isActive)
    }
    return (
        <header className='app-header relative h-[150px] w-full bg-transparent py-2 px-12 max-sm:px-5 flex flex-col text-black z-10'>
            <div className="h-[60%] flex justify-between items-center">
                <Link to="/">
                    <img src={logo} className='w-52' alt='website-logo' />
                </Link>
                <div className=" flex justify-between items-center max-md:justify-end">

                    <div className="gap-[1rem] flex justify-between items-center">
                        <div className="flex gap-[.5rem] justify-center items-center font-medium">
                            <Link className="flex justify-center items-center gap-[5px] text-sm" title="contact"><BsSearch className="cursor-pointer text-2xl text-[#AC74E7]" /></Link>
                            <Link className="flex justify-center items-center gap-[5px] text-sm" to='tel:+63 9666 640 405' title="contact"><BsTelephone className="cursor-pointer text-2xl text-[#AC74E7]" /></Link>
                        </div>
                        <button className="max-sm:hidden min-w-[110px] flex gap-1.5 justify-center items-center bg-button-color hover:bg-button-color-hover py-[14px] px-[5px] text-sm text-white rounded"><BsCart/>Cart</button>
                        <Link className="hidden justify-center items-center gap-[5px] text-sm max-sm:flex" title="contact"><BsCart className="cursor-pointer text-2xl text-[#AC74E7]" /></Link>
                    </div>
                </div>

            </div>
            <div className="h-[40%] flex items-center">
                <nav className=" w-full flex gap-[10px] flex-wrap justify-center text-sm font-bold max-md:hidden">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Component2'>Getting Started</NavLink>
                    <NavLink to='/Component3'>About Us</NavLink>
                    <NavLink to='/Component4'>Shop Now</NavLink>
                    <NavLink to='/Component5'>Videos</NavLink>
                    <NavLink to='/Component6'>Contact</NavLink>
                </nav>
                <div onClick={navToggle} className='flex justify-center items-center cursor-pointer gap-[1rem]'>
                    <div className={`navbar__toggle ${isActive ? "is-active" : ""}`} id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <h1 className="hidden max-sm:block">MENU</h1>
                </div>
                <div className={`navbar__menu ${isActive ? "active" : ""}`}>
                    <NavLink onClick={navToggle} to='/' className='navbar__link'>Home</NavLink>
                    <NavLink onClick={navToggle} to='/Component2' className='navbar__link'>Getting Started</NavLink>
                    <NavLink onClick={navToggle} to='/Component3' className='navbar__link'>About Us</NavLink>
                    <NavLink onClick={navToggle} to='/Component4' className='navbar__link'>Shop Now</NavLink>
                    <NavLink onClick={navToggle} to='/Component5' className='navbar__link'>Videos</NavLink>
                    <NavLink onClick={navToggle} to='/Component6' className='navbar__link'>Contact</NavLink>
                 
                </div>
            </div>
        </header>
    )
}