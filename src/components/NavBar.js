import React from 'react'
import './NavBar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { CarouselPrice } from './CarouselPrice';
import { DropDownMenu } from './DropDownMenu';



export const NavBar = () => {
    return (
        <section className='navBarContainerBg'>
            <div className='navBarCarousel'>
                <CarouselPrice />
            </div>
            <nav className='navBarContainer'>
                <div className="navBarSearch">
                    <div>
                        <AiOutlineSearch />
                    </div>
                </div>
                <div className='navBarLogo'>
                    Financial <span>News</span>
                </div>
                <div className='navBarLogin'>
                    <div>Subscribe</div>
                    <div>Login</div>
                </div>
            </nav>
            <div className='navBarDropDownMenu'>
                <DropDownMenu />
            </div>
        </section>
    )
}
