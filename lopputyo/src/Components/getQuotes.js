import { useContext, useEffect } from "react"
import { AppContext } from "../app-context"
const GetQuotes = () => {
    const [state, setState] = useContext(AppContext);
    const loadQuote =  async () => {
        const API_URL = "https://api.kanye.rest/"

        let response = await fetch(API_URL)

        let data = await response.json()

        addQuote(data.quote)
    }
    const addQuote = (quote) => {
        let new_quotes = [...state.quotes, quote]
        setState({ ...state, quotes: new_quotes})
    }

    const deleteQuote = (quote) => {
        let new_quotes = state.quotes.filter((element) => {
            return !(
                quote === element
            )
        })   
        setState({...state, quotes: new_quotes})
    }
    const deleteQuotes = () => {
        
        setState({...state, quotes: []})
    }

    return{
        loadQuote: loadQuote,
        quoteAdd: addQuote,
        deleteQuote: deleteQuote, 
        deleteQuotes: deleteQuotes,
        quotes: state.quotes,
        quote: state.quote,
    }
}
export default GetQuotes;