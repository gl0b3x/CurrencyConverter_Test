import { useState, useEffect } from "react";
import useCurrencyRates from "../../apiHook/useCurrencyRates.jsx";

const Header = () => {
  const [usdRates, setUsdRates] = useState(0);
  const [eurRates, setEurRates] = useState(0);
  const usdCurrencyRates = useCurrencyRates("USD");
  const eurCurrencyRates = useCurrencyRates("EUR");

  useEffect(() => {
    if (usdCurrencyRates.UAH && eurCurrencyRates.UAH) {
      setUsdRates(usdCurrencyRates.UAH);
      setEurRates(eurCurrencyRates.UAH);
    }
  }, [usdCurrencyRates, eurCurrencyRates]);

  return (
    <div className="header">
      <span>Курс валют в UAH:</span>
      <ul className="header-currencies">
        <li>$ {usdRates} </li>
        <li>€ {eurRates} </li>
      </ul>
    </div>
  );
};

export default Header;
