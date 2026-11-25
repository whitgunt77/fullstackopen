import Country from "./Country";

const Countries = ({ countries, selected, onShow }) => {
  if (selected) {
    return <Country country={selected} />;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3}>
          {country.name.common}{" "}
          <button onClick={() => onShow(country)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
