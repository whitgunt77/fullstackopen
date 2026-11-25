import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setSelected(null);
  };

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <div>
        find countries <input value={query} onChange={handleQueryChange} />
      </div>
      <Countries
        countries={countriesToShow}
        selected={selected}
        onShow={setSelected}
      />
    </div>
  );
};

export default App;
