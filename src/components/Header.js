import React from "react";
import { NavLink, Link} from "react-router-dom";
import logo from '.././assets/images/logo/website-logo.png'
import {AiFillPhone} from 'react-icons/ai'
import {RiFileUserLine} from 'react-icons/ri'



export const Header = () => {
    return(
        <header className='app-header h-20 w-full bg-gray-100 py-[10px] px-[50px] flex justify-between items-center text-black'>
            <Link to="/">      
            <img src={logo} className='w-52'  alt='website-logo'/>
            </Link>
            <nav className="flex gap-[10px] flex-wrap justify-center text-sm font-bold md:hidden">
                <NavLink to='/'> How It Works</NavLink>
                <NavLink to='/Component2'>Getting Started</NavLink>
                <NavLink to='/Component3'>About Us</NavLink>
                <NavLink to='/Component4'>Resources</NavLink>
                <NavLink to='/Component5'>Videos</NavLink>
                <NavLink to='/Component6'>Contact</NavLink>
            </nav>
            <div className="font-medium"> 
                <Link className="flex justify-center items-center gap-[5px] text-sm" to='tel:+03 9014 1414' title="contact"><AiFillPhone className="cursor-pointer text-2xl text-[#AC74E7]"/> 03 9014 1414 </Link>
            </div>
            <button className="flex gap-1.5 justify-center items-center bg-button-color hover:bg-button-color-hover py-[14px] px-[5px] text-sm text-white rounded"><RiFileUserLine/>Book a Call</button>
      </header>
    )
}