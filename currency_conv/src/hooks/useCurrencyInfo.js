import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]); // res is the full data object, res[currency] is the actual rates
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;


