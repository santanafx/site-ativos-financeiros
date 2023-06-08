import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const API_KEY = 'QM1A1RWRLRYIUDUD';
    let API_CALLTopNews = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`;
    let API_CALLTechnology = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology&apikey=${API_KEY}`;
    let API_CALLIncomeTechnology = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=META&apikey=${API_KEY}`
    const [dataTopNews, setDataTopNews] = React.useState(JSON.parse(localStorage.getItem('key')));
    const [dataTechnology, setDataTechnology] = React.useState(JSON.parse(localStorage.getItem('key2')));
    const [dataIncomeTechnology, setDataIncomeTechnology] = React.useState(JSON.parse(localStorage.getItem('key3')));


    React.useEffect(() => {
        const apiCall = async (API, setData) => {
            const resp = await fetch(API);
            const data = await resp.json();
            setData(data);
        }

        if (dataTopNews === null) {
            try {
                apiCall(API_CALLTopNews, setDataTopNews);
                console.log('rodou')
            } catch {
                console.log('API falhou')
            }
        }

        if (dataTechnology === null) {
            try {
                apiCall(API_CALLTechnology, setDataTechnology);

                console.log('rodou')
            } catch {
                console.log('API falhou')
            }
        }

        if (dataIncomeTechnology === null) {
            try {
                apiCall(API_CALLIncomeTechnology, setDataIncomeTechnology);

                console.log('rodou')
            } catch {
                console.log('API falhou')
            }
        }
    }, [])

    localStorage.setItem('key', JSON.stringify(dataTopNews))
    localStorage.setItem('key2', JSON.stringify(dataTechnology))
    localStorage.setItem('key3', JSON.stringify(dataIncomeTechnology))

    return (
        <Context.Provider value={{ dataTopNews, dataTechnology, dataIncomeTechnology }}>
            {children}
        </Context.Provider>
    );
}