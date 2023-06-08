import React from 'react'
import './Inicio.css'
import { MainNews } from '../components/MainNews';
import { SecundaryNews } from '../components/SecundaryNews';
import { RestNews } from '../components/RestNews';
import { Context } from '../context/globalContext';
import Grafico from '../components/Grafico';
import { FundamentalData } from '../components/FundamentalData';

export const Inicio = () => {
    const { dataTopNews, dataTechnology, dataIncomeTechnology } = React.useContext(Context);


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
                            <div className='inicioSegundaNoticia'>
                                <SecundaryNews data={dataTopNews} index={1} />
                            </div>
                            <div className='inicioTerceiraNoticia'>
                                <SecundaryNews data={dataTopNews} index={2} />
                            </div>
                            <div className='inicioQuartaNoticia'>
                                <RestNews data={dataTopNews} index={3} />
                            </div>
                            <div className='inicioQuintaNoticia'>
                                <RestNews data={dataTopNews} index={4} />
                            </div>
                        </div>
                    </section>
                </>
                : <h1>loading</h1>}
            {dataTechnology !== null ?
                <>
                    <h1 className='inicioTitle'>Technology</h1>
                    <section className='inicioContainerBg'>
                        <div className='inicioContainer'>
                            <div className='inicioGrafico'>
                                <Grafico ticker={dataTechnology.feed[0].ticker_sentiment[0].ticker} />
                                <FundamentalData dataIncome={dataIncomeTechnology} ticker={dataTechnology.feed[0].ticker_sentiment[0].ticker} />
                            </div>
                            <div className='inicioPrincipalNoticia'>
                                <MainNews data={dataTechnology} index={0} />
                            </div>
                            <div className='inicioSegundaNoticia'>
                                <SecundaryNews data={dataTechnology} index={1} />
                            </div>
                            <div className='inicioTerceiraNoticia'>
                                <SecundaryNews data={dataTechnology} index={2} />
                            </div>
                            <div className='inicioQuartaNoticia'>
                                <RestNews data={dataTechnology} index={3} />
                            </div>
                            <div className='inicioQuintaNoticia'>
                                <RestNews data={dataTechnology} index={4} />
                            </div>
                        </div>
                    </section>
                </>
                : <h1>loading</h1>}

        </>
    )
}