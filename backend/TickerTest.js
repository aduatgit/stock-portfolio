const yahooFinance = require("yahoo-finance2").default;
const fs = require("fs");

//ticker + Kaufdatum + Verkaufdatum = input("Gib Ticker ein: ") --> kommt aus frontend

async function ticker(ticker, kaufdatum, verkaufdatum) {
  const query = ticker;
  const queryOptions = {
    period1: kaufdatum, //Performance wird ab Kaufdatum gemessen
    if(verkaufdatum) {
      period2: verkaufdatum;
    }, else: {
      period2: Date().toISOString().split('T')[0] //Performance wird entweder bis "heute" gemessen oder bis zu einem Verkaufsdatum (Input) gemessen
    },
    interval: "1d",
  };
  const result = await yahooFinance.chart(query, queryOptions);

  let jsonData = JSON.stringify(result.quotes);
  console.log(jsonData);

  fs.writeFile(
    "../frontend/my-react-app/src/data/charts.json",
    jsonData,
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

console.log(ticker()); 