async function getStocks(stockTickers) {
  const stockDetails = await Promise.all(
    stockTickers.map(async ticker => {
      const stockResponse = await fetch('http://localhost:5000/dashboard/' + ticker);
      const stock = await stockResponse.json();
      return stock;
    })
  );

  return stockDetails;
}

export default getStocks;
