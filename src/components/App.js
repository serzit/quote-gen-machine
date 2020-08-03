import React, {useEffect, useState} from 'react';
import quotesRequest from '../api/quotesRequest';
import Quote from './Quote';

const App = () => {
  const [quotesList, setQuotesList] = useState([]);
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const response = quotesRequest.get('/quotes.json')
    .then(res => {
      setQuotesList(res.data.quotes);
      setQuote(res.data.quotes[0])
      setLoading(false);
    })
  }, [])

  const clickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const random = Math.floor(Math.random() * quotesList.length);
    setQuote(quotesList[random]);
    setTimeout(() => setLoading(false), 30);
  }

  if (loading) return null;

  return (
    <Quote clickHandler={clickHandler} quote={quote} />
)
}

export default App