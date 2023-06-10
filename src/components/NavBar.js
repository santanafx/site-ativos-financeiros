import React from 'react'
import './NavBar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { DropDownMenu } from './DropDownMenu';
import { CarouselNews } from './CarouselNews';



export const NavBar = () => {

    const [show, setShow] = React.useState(false);
    const refInput = React.useRef();

    const handleClick = () => {
        refInput.current.focus();
    }

    return (
        <section className='navBarContainerBg'>
            <nav className='navBarContainer'>
                <div className="navBarSearch">
                    <div onClick={() => setShow(!show)}>
                        <AiOutlineSearch />
                    </div>
                </div>
                <div className='navBarSearchInput'>
                    {show ? <><input ref={refInput} type="text" required /><span onClick={() => { handleClick() }}>Search</span></> : ''}
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
            <div className='navBarCarouselNews'>
                <h2>LAST NEWS</h2>
                <CarouselNews />
            </div>
        </section>
    )
}
