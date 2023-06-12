import React, { useContext } from 'react'
import './CarouselNews.css'
import { Context } from '../context/globalContext'

export const CarouselNews = () => {

    const { dataTopNews } = useContext(Context);

    const handleNews = (url) => {
        window.location.href = url;
    }

    return (
        <>
            {dataTopNews !== null ? <section className='carouselNewsContainerBg'>
                <div className='carouselNewsContainer'>
                    {dataTopNews.feed.slice(10, 15).map(element => (<div onClick={() => handleNews(element.url)} key={element.title}>{element.title}</div>))}
                    {dataTopNews.feed.slice(10, 15).map(element => (<div onClick={() => handleNews(element.url)} key={element.title}>{element.title}</div>))}
                </div>
            </section> : ''}
        </>
    )
}
