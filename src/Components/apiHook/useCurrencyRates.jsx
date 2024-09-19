import { useState, useEffect } from "react";

const useCurrencyRates = (fromCurrency) => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const preload = async () => {
      const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
      try {
        const response = await fetch(url, { cache: "no-store" });
        const currency = await response.json();
        setRates(currency.rates);
      } catch (err) {
        console.error(err);
      }
    };

    preload();
  }, [fromCurrency]);

  return rates;
};

export default useCurrencyRates;
