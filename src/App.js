import React from 'react';
import Grafico from '../src/components/Grafico';
import './App.css';

function App() {

  const [imgNews, setImgNews] = React.useState('');
  // const API_KEY = 'QM1A1RWRLRYIUDUD';
  // const SYMBOL = 'AAPL';
  // let API_CALL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${SYMBOL}&apikey=${API_KEY}`;

  // const fetchApi = () => {

  //   fetch(API_CALL).then(resp => resp.json()).then(data => setImgNews(data.feed[0].banner_image))
  // }
  // const API_KEY = 'a1g8RPcpWDua52OpL3dwxuCyM1VpdVFx';
  // const SYMBOL = 'AMZN';
  // let API_CALL = `https://api.polygon.io/v2/reference/news?ticker=${SYMBOL}&order=asc&limit=10&apiKey=${API_KEY}`;

  // const fetchApi = () => {

  //   fetch(API_CALL).then(resp => resp.json()).then(data => console.log(data.results[0].image_url))
  // }


  const API_KEY = 'eTSDsPcCdn1hcxPgzLghFjIFDbdyoHnC';
  const filter = 'financial';
  const query = 'charles'

  // let local = '';
  React.useEffect(() => {

    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&api-key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setImgNews(data.response.docs[0].multimedia[0].url))
    // local = window.localStorage.getItem('img')

  }, [])


  return (
    <div>

      <img src={`http://www.nytimes.com/${imgNews}`} alt="" />
      {/* {console.log(local)} */}
      <Grafico />
    </div>
  );
}

export default App;
