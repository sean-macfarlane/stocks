# Stock ticker challenge
A NEXT.js stock lookup app to find up-to-date data about a stock using Finnhub's API.

## Thought Process
I decided to make a searchbar with an autocomplete to lookup symbols, and when you click on the symbol you navigate to a symbol page where there would be more info about the company, stock price, and a stocks chart.

I started with the searchbar component and I made it client-side data fetching because it is a component and the data is frequently changing. Then I made the symbol page and I initially wanted to use incremental static regeneration to load the Company profile data because this data does not change often and there are way too many symbols to pre-render them all, and for the stock price create a WebSocket to get real-time data. But for some reason the Websocket was not working with Finnhub, so I switched the page to just use Server-Side-Rendering because the stock price is time sensitive data. 

I installed Highcharts to use as the chart library because I've used it before and know they have a nice stocks package, but I ran out of time before I could actually implement a chart.
I installed axios and react-use-websocket to use for API calls and Websocket only for convenience to save time.

## Set up environment:

Install Dependencies:
`npm install`

## Run:

### Development

`npm run dev`

### Tests

`npm test`

### Production

`npm run build`
`npm start`