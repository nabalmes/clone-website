import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '.././assets/images/logo/website-logo.png'
import { AiFillPhone } from 'react-icons/ai'
import { RiFileUserLine } from 'react-icons/ri'



export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const navToggle = () => {
        setIsActive(!isActive)
    }
    return (
        <header className='app-header relative gap-[1rem] h-20 w-full bg-transparent py-2 px-12 max-sm:px-5 flex justify-between items-center text-black z-10'>
            <Link to="/">
                <img src={logo} className='w-52' alt='website-logo' />
            </Link>
            <div className=" w-full flex justify-between items-center max-md:justify-end">
                <nav className=" w-full flex gap-[10px] flex-wrap justify-center text-sm font-bold max-md:hidden">
                    <NavLink to='/'> How It Works</NavLink>
                    <NavLink to='/Component2'>Getting Started</NavLink>
                    <NavLink to='/Component3'>About Us</NavLink>
                    <NavLink to='/Component4'>Resources</NavLink>
                    <NavLink to='/Component5'>Videos</NavLink>
                    <NavLink to='/Component6'>Contact</NavLink>
                </nav>
                <div className="gap-[1rem] flex justify-between items-center">
                    <div className="min-w-[120px] font-medium max-sm:hidden">
                        <Link className="flex justify-center items-center gap-[5px] text-sm" to='tel:+03 9014 1414' title="contact"><AiFillPhone className="cursor-pointer text-2xl text-[#AC74E7]" /> 03 9014 1414 </Link>
                    </div>
                    <button className="max-sm:hidden min-w-[110px] flex gap-1.5 justify-center items-center bg-button-color hover:bg-button-color-hover py-[14px] px-[5px] text-sm text-white rounded"><RiFileUserLine />Book a Call</button>
                    <div onClick={navToggle} className={`navbar__toggle ${isActive ? "is-active" : ""}`} id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            <div className={`navbar__menu ${isActive ? "active" : ""}`}>
                <NavLink onClick={navToggle} to='/' className='navbar__link'> How It Works</NavLink>
                <NavLink onClick={navToggle} to='/Component2' className='navbar__link'>Getting Started</NavLink>
                <NavLink onClick={navToggle} to='/Component3' className='navbar__link'>About Us</NavLink>
                <NavLink onClick={navToggle} to='/Component4' className='navbar__link'>Resources</NavLink>
                <NavLink onClick={navToggle} to='/Component5' className='navbar__link'>Videos</NavLink>
                <NavLink onClick={navToggle} to='/Component6' className='navbar__link'>Contact</NavLink>
                <div className="gap-[1rem] flex justify-around items-center w-full">
                    <div className="min-w-[120px] hidden font-medium max-sm:block">
                        <Link className="flex justify-center items-center gap-[5px] text-sm" to='tel:+03 9014 1414' title="contact"><AiFillPhone className="cursor-pointer text-2xl text-[#AC74E7]" /> 03 9014 1414 </Link>
                    </div>
                    <button className="max-sm:flex min-w-[110px] hidden gap-1.5 justify-center items-center bg-button-color hover:bg-button-color-hover py-[14px] px-[5px] text-sm text-white rounded"><RiFileUserLine />Book a Call</button>
                </div>
            </div>
        </header>
    )
}