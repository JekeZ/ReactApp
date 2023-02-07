import getQuotes from "./getQuotes";
import Quote from "./Quote";

const QuoteList = ({deleteYksi}) => {
    const {quotes} = getQuotes();
    return(
        <div>
            {quotes.map((quote, index) => {
                return (
                <Quote
                    key={quote + "-" + index} 
                    quote={quote}
                    deleteYksi={deleteYksi}
                />
                )
            })}
        </div>
    );
};

export default QuoteList;