import React from 'react'
import './MoreNews.css'

export const MoreNews = ({ data, index }) => {

    const indexInicial = 3;
    const [newData, setNewData] = React.useState(data.feed);

    const handleNews = (url) => {
        window.location.href = url;
    }

    return (
        <>
            {/* <h1 className='inicioTitle'>MORE NEWS</h1> */}
            <div className='moreNews' >
                {newData.slice(indexInicial, index).map(element =>
                    <div className="moreNewsContainer" key={element.title}>
                        <img onClick={() => handleNews(element.url)} src={element.banner_image} alt="" />
                        <h1 onClick={() => handleNews(element.url)}>{element.title}</h1>
                        <h4 onClick={() => handleNews(element.url)}>{element.summary}</h4>
                        <p>Source: {element.source}</p>
                        <span onClick={() => handleNews(`https://${element.source_domain}`)}>{element.source_domain}</span>
                    </div>
                )}
            </div>
        </>
    )
}
