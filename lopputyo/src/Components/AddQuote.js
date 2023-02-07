import { useContext, useEffect, useState } from "react";
import getQuotes from "./getQuotes";
import QuoteList from "./QuoteList";

const AddQuote = () => {

  const { loadQuote } = getQuotes();

  const [quoteCount, setQuoteCount] = useState(0)

  const laskuri = () => {
    setQuoteCount(quoteCount + 1);
  };

  const kaikkiQuotet = () => {
    setQuoteCount(0);
  };


  const { deleteQuotes, quotes } = getQuotes();

  const deleteKaikki = () => {
    deleteQuotes({ quotes });
  };

  const deleteYksi = () => {
    setQuoteCount(quoteCount - 1);

  };
  return (
    <div style={{
      textAlign: "center"
      }}>
      <input
        onClick={() => {
          loadQuote();
          laskuri();
        }}
        className="btn"
        type="button"
        value="Fetch 1 quote"
      />
      <div style={{
        textAlign: "center",
        fontWeight: 1.5,
        color: "#292b2c"
        }}>
        <h3 style={{
          fontSize: 40, 
          color: "white",
          backgroundColor: "#04AA6D", 
          border: 100, 
          textAlign: "center",
          borderRadius: "22px"
          }}>
          Word Count filter:
          </h3>
        <input 
        type="text"
        align="center" 
        name="oneliner" 
        id="sanat" 
        />
        <label className="font-light text-sm" htmlFor="oneliner"></label>
      </div>
      <div style={{textAlign: "center"}}>
          {(() => {
            if(quoteCount === 0){
              return(<h2 style={{fontSize: 40, color: "green", textAlign: "center"}}>No Quotes!</h2>)
            }else{
              return(<h2 style={{fontSize: 40, color: "green", textAlign: "center"}}>Total quote count: {quoteCount}</h2>)
            }
          })()}
        {/* <h2 style={{fontSize: 40, color: "green", textAlign: "center"}}>Total quote count: {quoteCount}</h2> */}
      </div>
      <div>
        {(() => {
          if(quoteCount === 0){
            return(<h2 style={{fontSize: 40, color: "green", textAlign: "center"}} className="text-gray-500">No Quotes!</h2>)
          }else{
            return(<h2 style={{fontSize: 40, color: "green", textAlign: "center"}} className="text-gray-500">Quotes in view: {quoteCount}</h2>)
          }
        })()}
        {/* <h2 style={{fontSize: 40, color: "green", textAlign: "center"}} className="text-gray-500">Quotes in view: {quoteCount}</h2> */}
      </div>
      <div>
        <div style={{
          textAlign: "center",
          Color: "red"
          }}>
          <input
            onClick={() => {
              deleteKaikki();
              kaikkiQuotet();
            }}
            type="button"
            value="Delete all quotes"
          />
        </div>
      </div>
      <QuoteList deleteYksi={deleteYksi} />
    </div>
  );
};

export default AddQuote;
