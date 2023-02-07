import getQuotes from "./getQuotes";



const Quote = ({quote, deleteYksi}) => {
  const {deleteQuote} = getQuotes();

  const deleteClick = () => {
    deleteQuote(quote);
  }
    
  return (
    <div>
        {quote}
        <input 
        type="button" 
        value="Delete" 
        onClick={() => {
          deleteClick();
          deleteYksi();
        }}
        />
    </div>
  );
};
export default Quote;