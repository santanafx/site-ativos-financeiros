import React from 'react'
import './Inicio.css'

export const Inicio = () => {

    const [imgNews, setImgNews] = React.useState('');
    const API_KEY = 'QM1A1RWRLRYIUDUD';
    const SYMBOL = 'AAPL';
    let API_CALL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`;
    let local = '';
    local = window.localStorage.getItem('inf');

    React.useEffect(() => {
        if (local === null) {
            fetch(API_CALL).then(resp => resp.json()).then(data => window.localStorage.setItem('inf', JSON.stringify(data)))
        }
    }, [])

    let data = JSON.parse(local);

    const handleNews = (url) => {
        window.location.href = url;
    }
    return (
        <section className='inicioContainerBg'>
            {console.log(data)}
            <div className='inicioContainer'>
                <div className='inicioPrincipalNoticia'>
                    <img onClick={() => handleNews(data.feed[0].url)} src={data.feed[0].banner_image} alt="" />
                    <h6>{data.feed[0].topics[0].topic}</h6>
                    <h1 onClick={() => handleNews(data.feed[0].url)}>{data.feed[0].title}</h1>
                    <h4 onClick={() => handleNews(data.feed[0].url)}>{data.feed[0].summary}</h4>
                    <p>Source: {data.feed[0].source}</p>
                    <span onClick={() => handleNews(`https://${data.feed[0].source_domain}`)}>{data.feed[0].source_domain}</span>
                </div>
                <div className='inicioSegundaNoticia'>
                    <img onClick={() => handleNews(data.feed[1].url)} src={data.feed[1].banner_image} alt="" />
                    <h6>{data.feed[1].topics[0].topic}</h6>
                    <h1 onClick={() => handleNews(data.feed[1].url)}>{data.feed[1].title}</h1>
                    <h4 onClick={() => handleNews(data.feed[1].url)}>{data.feed[1].summary}</h4>
                    <p>Source: {data.feed[1].source}</p>
                    <span onClick={() => handleNews(`https://${data.feed[1].source_domain}`)}>{data.feed[1].source_domain}</span>
                </div>
                <div className='inicioTerceiraNoticia'>
                    <img onClick={() => handleNews(data.feed[2].url)} src={data.feed[2].banner_image} alt="" />
                    <h6>{data.feed[2].topics[0].topic}</h6>
                    <h1 onClick={() => handleNews(data.feed[2].url)}>{data.feed[2].title}</h1>
                    <h4 onClick={() => handleNews(data.feed[2].url)}>{data.feed[2].summary}</h4>
                    <p>Source: {data.feed[2].source}</p>
                    <span onClick={() => handleNews(`https://${data.feed[2].source_domain}`)}>{data.feed[2].source_domain}</span>
                </div>
                <div className='inicioQuartaNoticia'>
                    <img onClick={() => handleNews(data.feed[3].url)} src={data.feed[3].banner_image} alt="" />
                    <h6>{data.feed[3].topics[0].topic}</h6>
                    <h1 onClick={() => handleNews(data.feed[3].url)}>{data.feed[3].title}</h1>
                    <h4 onClick={() => handleNews(data.feed[3].url)}>{data.feed[3].summary}</h4>
                    <p>Source: {data.feed[3].source}</p>
                    <span onClick={() => handleNews(`https://${data.feed[3].source_domain}`)}>{data.feed[3].source_domain}</span>
                </div>
                <div className='inicioQuintaNoticia'>
                    <img onClick={() => handleNews(data.feed[4].url)} src={data.feed[4].banner_image} alt="" />
                    <h6>{data.feed[4].topics[0].topic}</h6>
                    <h1 onClick={() => handleNews(data.feed[4].url)}>{data.feed[4].title}</h1>
                    <h4 onClick={() => handleNews(data.feed[4].url)}>{data.feed[4].summary}</h4>
                    <p>Source: {data.feed[4].source}</p>
                    <span onClick={() => handleNews(`https://${data.feed[4].source_domain}`)}>{data.feed[4].source_domain}</span>
                </div>
            </div>
        </section>
    )
}


  // const API_KEY = 'a1g8RPcpWDua52OpL3dwxuCyM1VpdVFx';
  // const SYMBOL = 'AMZN';
  // let API_CALL = `https://api.polygon.io/v2/reference/news?ticker=${SYMBOL}&order=asc&limit=10&apiKey=${API_KEY}`;

  // const fetchApi = () => {

  //   fetch(API_CALL).then(resp => resp.json()).then(data => console.log(data.results[0].image_url))
  // }


  // const API_KEY = 'eTSDsPcCdn1hcxPgzLghFjIFDbdyoHnC';
  // const filter = 'financial';
  // const query = 'gold'

  // let local = '';
  // local = window.localStorage.getItem('inf');
  // React.useEffect(() => {

  //   if (local === null) {
  //     fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&api-key=${API_KEY}`)
  //       .then(res => res.json())
  //       .then(data => window.localStorage.setItem('inf', JSON.stringify(data.response.docs)));
  //   }
  // }, [])