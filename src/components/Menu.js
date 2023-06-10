import React from 'react'
import './Menu.css'
import { AiOutlineMenu } from "react-icons/ai";

export const Menu = () => {
    return (
        <section className="MenuContainerBg">
            <nav className="MenuContainer">
                <div className='MenuIcon'>
                    <div>
                        <AiOutlineMenu />
                    </div>
                </div>
                <div className="MenuOpt">
                    <div>
                        <div>Market</div>
                        <div>Lists</div>
                        <div>Webseries</div>
                        <div>Tech</div>
                        <div>Cripto</div>
                        <div>Inovation</div>
                    </div>
                </div>
                <div className='MenuEmpty'>
                    <div></div>
                </div>
            </nav>
        </section>
    )
}
