import { createContext, useReducer } from 'react';
import NewReducer from './NewReducer';
import axios from 'axios';

const initialState = {
    news: []
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NewReducer, initialState);

    const getNews = async () => {
        const res = await axios.get("https://newsapi.org/v2/everything?language=en&q=tesla&from=2024-04-26&sortBy=publishedAt&apiKey=84d28dda742546d5a2a71167539093fb");
        console.log(res.data.articles);
        dispatch({
            type: "GET_NEWS",
            payload: res.data.articles,
        });
    };

    return (
        <GlobalContext.Provider value={{
            news: state.news,
            getNews
        }}>
            {children}
        </GlobalContext.Provider>
    );
};