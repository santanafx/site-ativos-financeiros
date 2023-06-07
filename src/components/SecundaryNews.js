import React from 'react'
import './SecundaryNews.css'

export const SecundaryNews = ({ data, index }) => {
    const handleNews = (url) => {
        window.location.href = url;
    }
    return (
        <div className='secundaryNews'>
            <img onClick={() => handleNews(data.feed[index].url)} src={data.feed[index].banner_image} alt="" />
            <h6>{data.feed[index].topics[0].topic}</h6>
            <h1 onClick={() => handleNews(data.feed[index].url)}>{data.feed[index].title}</h1>
            <h4 onClick={() => handleNews(data.feed[index].url)}>{data.feed[index].summary}</h4>
            <p>Source: {data.feed[0].source}</p>
            <span onClick={() => handleNews(`https://${data.feed[index].source_domain}`)}>{data.feed[index].source_domain}</span>
        </div>
    )
}
