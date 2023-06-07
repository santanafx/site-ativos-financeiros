import React from 'react'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const API_KEY = 'QM1A1RWRLRYIUDUD';
    let API_CALL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${API_KEY}`;
    let API_CALL2 = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology&apikey=${API_KEY}`;

    const [data, setData] = React.useState(JSON.parse(localStorage.getItem('key')));
    const [data2, setData2] = React.useState(JSON.parse(localStorage.getItem('key2')));

    React.useEffect(() => {
        const apiCall = async (API, setData) => {
            const resp = await fetch(API);
            const data = await resp.json();
            setData(data);
        }

        if (data === null) {
            try {
                apiCall(API_CALL, setData);
                console.log('rodou')
            } catch {
                console.log('API data falhou')
            }
        }
        if (data2 === null) {
            try {
                apiCall(API_CALL2, setData2);

                console.log('rodou')
            } catch {
                console.log('API data2 falhou')
            }
        }
    }, [])

    localStorage.setItem('key', JSON.stringify(data))
    localStorage.setItem('key2', JSON.stringify(data2))

    return (
        <Context.Provider value={{ data, data2 }}>
            {children}
        </Context.Provider>
    );
}