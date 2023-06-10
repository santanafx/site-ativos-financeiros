import React from 'react'
import TradingViewWidget1000px from '../components/TradingViewWidget1000px';
import { useParams } from 'react-router-dom';
import './Grafico.css'

export const Grafico = () => {
    const params = useParams();

    return (
        <>
            <div className='graficoContainer'>
                <TradingViewWidget1000px ticker={params.id} />
            </div>
        </>
    )
}
