import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const API_KEY = 'QM1A1RWRLRYIUDUD';
    let API_CALLTopNews = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`;
    const [dataTopNews, setDataTopNews] = React.useState(JSON.parse(localStorage.getItem('key')));

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
    }, [])

    localStorage.setItem('key', JSON.stringify(dataTopNews))

    return (
        <Context.Provider value={{ dataTopNews }}>
            {children}
        </Context.Provider>
    );
}