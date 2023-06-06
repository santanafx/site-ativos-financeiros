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
                        <div>Mercados</div>
                        <div>Listas</div>
                        <div>Webseries</div>
                        <div>Tech</div>
                        <div>Cripto</div>
                        <div>Inovação</div>
                    </div>
                </div>
                <div className='dropDownMenuEmpty'>
                    <div></div>
                </div>
            </nav>
        </section>
    )
}
