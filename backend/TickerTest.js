const yahooFinance = require("yahoo-finance2").default;
const fs = require("fs");

//ticker = input("Gib ticker ein: ")

async function ticker(ticker) {
  const query = ticker;
  const queryOptions = {
    period1: "2023-05-07",
    period2: "2024-05-15",
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
