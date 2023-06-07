import React from 'react'
import './DropDownMenu.css'
import { AiOutlineMenu } from "react-icons/ai";

export const DropDownMenu = () => {
    return (
        <section className="dropDownMenuContainerBg">
            <nav className="dropDownMenuContainer">
                <div className='dropDownMenuIcon'>
                    <div>
                        <AiOutlineMenu />
                    </div>
                </div>
                <div className="dropDownMenuOpt">
                    <div>
                        <div>Market</div>
                        <div>Lists</div>
                        <div>Webseries</div>
                        <div>Tech</div>
                        <div>Cripto</div>
                        <div>Inovation</div>
                    </div>
                </div>
                <div className='dropDownMenuEmpty'>
                    <div></div>
                </div>
            </nav>
        </section>
    )
}
