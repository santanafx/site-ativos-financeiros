import React from 'react'
import './Inicio.css'
import { MainNews } from '../components/MainNews';
import { SecundaryNews } from '../components/SecundaryNews';
import { RestNews } from '../components/RestNews';
import { Context } from '../context/globalContext';

export const Inicio = () => {

    const { data, data2 } = React.useContext(Context);
    return (
        <>
            {data !== null ?
                <>
                    <h1 className='inicioTitle'>TOP NEWS</h1>
                    <section className='inicioContainerBg'>
                        <div className='inicioContainer'>
                            <div className='inicioPrincipalNoticia'>
                                <MainNews data={data} index={0} />
                            </div>
                            <div className='inicioSegundaNoticia'>
                                <SecundaryNews data={data} index={1} />
                            </div>
                            <div className='inicioTerceiraNoticia'>
                                <SecundaryNews data={data} index={2} />
                            </div>
                            <div className='inicioQuartaNoticia'>
                                <RestNews data={data} index={3} />
                            </div>
                            <div className='inicioQuintaNoticia'>
                                <RestNews data={data} index={4} />
                            </div>
                        </div>
                    </section>
                </>
                : <h1>loading</h1>}
            {data2 !== null ?
                <>
                    <h1 className='inicioTitle'>Technology</h1>
                    <section className='inicioContainerBg'>
                        <div className='inicioContainer'>
                            <div className='inicioPrincipalNoticia'>
                                <MainNews data={data2} index={0} />
                            </div>
                            <div className='inicioSegundaNoticia'>
                                <SecundaryNews data={data2} index={1} />
                            </div>
                            <div className='inicioTerceiraNoticia'>
                                <SecundaryNews data={data2} index={2} />
                            </div>
                            <div className='inicioQuartaNoticia'>
                                <RestNews data={data2} index={3} />
                            </div>
                            <div className='inicioQuintaNoticia'>
                                <RestNews data={data2} index={4} />
                            </div>
                        </div>
                    </section>
                </>
                : <h1>loading</h1>}



        </>
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