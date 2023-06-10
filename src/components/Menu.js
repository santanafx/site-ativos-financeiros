import React from 'react'
import './Menu.css'
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";


export const Menu = () => {

    const [showSideBarMenu, setShowSideBarMenu] = React.useState(false);
    const [changeArrowMarket, setChangeArrowMarket] = React.useState(false);
    const [changeArrowList, setChangeArrowList] = React.useState(false);

    return (
        <section className="menuContainerBg">
            <nav className="menuContainer">
                <div className='menuIcon' >
                    <div className='menuIconLupa' onClick={() => setShowSideBarMenu(!showSideBarMenu)}>
                        <AiOutlineMenu />
                    </div>
                    <div className={showSideBarMenu ? 'menuSideBarActive' : 'menuSideBarClose'}>

                        <div className={changeArrowMarket ? 'marketArrowActive' : 'marketArrowClose'} onClick={() => setChangeArrowMarket(!changeArrowMarket)}>
                            <div>Market{changeArrowMarket ? <BsFillArrowUpCircleFill /> : <BsFillArrowDownCircleFill />}</div>
                        </div>
                        {changeArrowMarket ?
                            <ul>
                                <li>Quote Currency</li>
                                <li>Cripto Currency</li>
                                <li>Bovespa</li>
                            </ul> : ''}

                        <div className={changeArrowList ? 'marketArrowActive' : 'marketArrowClose'} onClick={() => setChangeArrowList(!changeArrowList)}>
                            <div>Lists{changeArrowList ? <BsFillArrowUpCircleFill /> : <BsFillArrowDownCircleFill />}</div>
                        </div>
                        {changeArrowList ?
                            <ul>
                                <li>Top 5 best stocks</li>
                                <li>Top 10 best performance stocks</li>
                                <li>Top 3 best index</li>
                            </ul> : ''}
                        <div>Webseries</div>
                        <div>Tech</div>
                        <div>Cripto</div>
                        <div>Inovation</div>
                    </div>
                </div>
                <div className="menuOpt">
                    <div>
                        <div>Market</div>
                        <div>Lists</div>
                        <div>Webseries</div>
                        <div>Tech</div>
                        <div>Cripto</div>
                        <div>Inovation</div>
                    </div>
                </div>
                <div className='menuEmpty'>
                    <div></div>
                </div>
            </nav>
        </section>
    )
}
