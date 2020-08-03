import React from 'react';

const Quote = ({clickHandler, quote}) => (
	<div id="quote-box">
		<p id="text">{quote.quote}</p>
		<p id="author">- {quote.author}</p>
		<div className="row">
			<a href={`https://www.twitter.com/intent/tweet?hashtags=quote&text=${quote.quote}-${quote.author}`}
				 target="_blank"
				 id="tweet-quote"
			>
				<p className="fa fa-twitter"></p>
			</a>
			<button onClick={clickHandler} id="new-quote">New Quote</button>
		</div>
	</div>
);

export default Quote