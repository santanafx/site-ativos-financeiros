import React from 'react'
import './MainNews.css'

export const MainNews = ({ data, index }) => {
    const handleNews = (url) => {
        window.location.href = url;
    }
    return (
        <div className='mainNews'>
            <img onClick={() => handleNews(data.feed[0].url)} src={data.feed[0].banner_image} alt="" />
            <h1 onClick={() => handleNews(data.feed[0].url)}>{data.feed[0].title}</h1>
            <h4 onClick={() => handleNews(data.feed[0].url)}>{data.feed[0].summary}</h4>
            <div>
                <p>Source: {data.feed[0].source}</p>
                <span onClick={() => handleNews(`https://${data.feed[0].source_domain}`)}>{data.feed[0].source_domain}</span>
            </div>
        </div>
    )
}
