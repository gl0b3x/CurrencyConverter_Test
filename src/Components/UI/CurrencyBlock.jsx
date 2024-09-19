const defaultCurrencies = ["UAH", "USD", "EUR", "GBP"];

const CurrencyBlock = ({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}) => {
  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? "active" : ""}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul>
      <div className="converter-wrapper">
        <input
          onChange={(e) => onChangeValue(e.target.value)}
          value={isNaN(value) ? "" : value}
          type="number"
        />
        <select
          className="select-currency"
          onChange={(e) => onChangeCurrency(e.target.value)}
          value={currency}
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="PLN">PLN</option>
          <option value="CZK">CZK</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    </div>
  );
};

export default CurrencyBlock;
