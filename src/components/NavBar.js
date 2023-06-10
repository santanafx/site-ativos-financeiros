import React from 'react'
import './NavBar.css'
import { AiOutlineSearch } from "react-icons/ai";
import { DropDownMenu } from './DropDownMenu';
import { CarouselNews } from './CarouselNews';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {

    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);
    const refInput = React.useRef();
    const [symbol, setSymbol] = React.useState('');

    const handleSelectInput = () => {
        refInput.current.focus();
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('vc apertou enter')
            navigate(`/grafico/${symbol}`)
            window.location.reload();
        }
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
                    {show ? <><input ref={refInput} type="text" required onKeyPress={(event) => handleKeyPress(event)} onChange={(element) => setSymbol(element.target.value)} /><span onClick={() => { handleSelectInput() }}>Search</span></> : ''}
                </div>
                <div onClick={() => navigate('/')} className='navBarLogo'>
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
