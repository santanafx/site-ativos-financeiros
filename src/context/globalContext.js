import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const API_KEY = 'QM1A1RWRLRYIUDUD';
    let API_CALLTopNews = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`;
    let API_CALLIncome = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=META&apikey=${API_KEY}`
    const [dataTopNews, setDataTopNews] = React.useState(JSON.parse(localStorage.getItem('key')));
    const [dataIncome, setDataIncome] = React.useState(JSON.parse(localStorage.getItem('key3')));


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

        if (dataIncome === null) {
            try {
                apiCall(API_CALLIncome, setDataIncome);

                console.log('rodou')
            } catch {
                console.log('API falhou')
            }
        }
    }, [])

    localStorage.setItem('key', JSON.stringify(dataTopNews))
    localStorage.setItem('key3', JSON.stringify(dataIncome))

    return (
        <Context.Provider value={{ dataTopNews, dataIncome }}>
            {children}
        </Context.Provider>
    );
}