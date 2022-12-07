import { useState, useEffect } from "react";

export default function DataFetching() {
  const [btcData, setBtcData] = useState({});

  // Both are fetching methods but the secondOne is preferred to fetch a data

  /*
    useEffect(() => {
      fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        .then((response) => response.json())
        .then((data) => setBtcData(data.bpi.USD))
        .catch((err) => console.log(err));
    });
    */

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((data) => setBtcData(data.bpi.USD))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
}
