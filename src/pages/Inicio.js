import React from 'react'
import './Inicio.css'
import { MainNews } from '../components/MainNews';
import { SecundaryNews } from '../components/SecundaryNews';
import { Context } from '../context/globalContext';
import { FundamentalData } from '../components/FundamentalData';
import TradingViewWidget from '../components/TradingViewWidget';
import { MoreNews } from '../components/MoreNews';

export const Inicio = () => {
    const { dataTopNews, dataIncome } = React.useContext(Context);
    const [count, setCount] = React.useState(5);


    return (
        <>
            {dataTopNews !== null ?
                <>
                    <h1 className='inicioTitle'>TOP NEWS</h1>
                    <section className='inicioContainerBg'>
                        <div className='inicioContainer'>
                            <div className='inicioPrincipalNoticia'>
                                <MainNews data={dataTopNews} index={0} />
                            </div>
                            <div className='inicioGrafico'>
                                <TradingViewWidget ticker={dataTopNews.feed[0].ticker_sentiment[0].ticker} />
                                {/* <FundamentalData dataIncome={dataIncome} ticker={dataTopNews.feed[0].ticker_sentiment[0].ticker} /> */}
                            </div>
                            <div className='inicioSegundaNoticia'>
                                <SecundaryNews data={dataTopNews} index={1} />
                            </div>
                            <div className='inicioTerceiraNoticia'>
                                <SecundaryNews data={dataTopNews} index={2} />
                            </div>
                        </div>
                    </section>
                    <h1 className='inicioTitle'>MORE NEWS</h1>

                    <section className='inicioQuartaNoticia'>
                        <MoreNews data={dataTopNews} index={count} />
                    </section>
                    <div className='inicioBotaoBg'>
                        <div className='inicioBotao'>
                            <button onClick={() => setCount(count + 5)}>More news...</button>
                            <div className='fadeEffect'></div>
                        </div>
                    </div>

                </>
                : <h1>loading</h1>}


        </>
    )
}