export const fetchLoader = async pageForLoad => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageForLoad}&sparkline=false`;
  try {
    const newCoinsList = await fetch(URL);
    if (newCoinsList.ok) {
      return newCoinsList.json();
    }
  } catch (error) {
    throw new Error(`We have a problem ${error}`);
  }
};
