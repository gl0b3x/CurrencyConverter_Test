import CurrencyBlock from "../../UI/CurrencyBlock.jsx";
import { useEffect, useState } from "react";
import Button from "../../UI/Button.jsx";
import useCurrencyRates from "../../apiHook/useCurrencyRates.jsx";

const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const rates = useCurrencyRates(fromCurrency);

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setFromPrice(value);
    setToPrice(result);
  };

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  const changeCurrency = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setFromPrice(toPrice);
    setToPrice(fromPrice);
  };

  return (
    <div className="converter">
      <CurrencyBlock
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Button someFunction={changeCurrency} />
      <CurrencyBlock
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
};

export default Converter;
