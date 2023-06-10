import React from 'react'
import './Menu.css'
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import top5Stocks from '../images/top-5-stocks.jpg'
import tesla from '../images/tesla.jpg'
import majorIndex from '../images/major-index.jpg'


export const Menu = () => {

    const [showSideBarMenu, setShowSideBarMenu] = React.useState(false);
    const [showDropDownMainMenu, setShowDropDownMainMenu] = React.useState(false);
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
                <nav className="menuOptContainerBg">
                    <div className='menuOptContainer'>
                        <div onMouseEnter={() => setShowDropDownMainMenu(!showDropDownMainMenu)} onMouseLeave={() => setShowDropDownMainMenu(!showDropDownMainMenu)}>
                            <a href='/#' >Market</a>
                            <div className={showDropDownMainMenu ? 'menuOptMarketActive' : 'menuOptMarketClose'}>
                                <div>
                                    <h1>Markets</h1>
                                    <li>Top 5 best stocks</li>
                                    <li>Top 10 best performance stocks</li>
                                    <li>Top 3 best index</li>
                                </div>
                                <div onClick={() => window.location.href = 'https://www.investors.com/research/best-stocks-to-buy-now'}>
                                    <img src={top5Stocks} alt="Imagem ilustrativa de notícia de ações" />
                                    <h2>5 Best Growth Stocks to Invest in Now, According to Analysts</h2>
                                </div>
                                <div onClick={() => window.location.href = 'https://finance.yahoo.com/news/12-best-performing-p-500-153949541.html'}>
                                    <img src={tesla} alt="Imagem ilustrativa Top 10 performance ações." />
                                    <h2>5 Best Growth Stocks to Invest in Now, According to Analysts</h2>
                                </div>
                                <div onClick={() => window.location.href = 'https://finance.yahoo.com/world-indices/'}>
                                    <img src={majorIndex} alt="Imagem ilustrativa Top 10 performance ações." />
                                    <h2>Major world index.</h2>
                                </div>
                            </div>
                        </div>

                        <a href='/#'>Lists</a>
                        <a href='/#'>Webseries</a>
                        <a href='/#'>Tech</a>
                        <a href='/#'>Cripto</a>
                        <a href='/#'>Inovation</a>
                    </div>
                </nav>
                <div className='menuEmpty'>
                    <div></div>
                </div>
            </nav>
        </section>
    )
}
