function Card() {

    const country = [
        {
            name: 'Tunisia',
            capital: 'Tunis',
            population: 12,
            language: 'Arabic',
        },
        {
            name: 'France',
            capital: 'Paris',
            population: 68,
            language: 'Français',
        },
    ];

    const handleClick = (e, countryName) => {
        e.preventDefault()
        alert(`Hello From ${countryName.toUpperCase()} !`);
    };

    return (
        <div>
            {country.map((c, index) => (
                <div key={index} className="card" onClick={(e) => handleClick(e, c.name)}>
                    <h2>{c.name}</h2>
                    <p>Capital: {c.capital}</p>
                    <p>Population: {c.population} M</p>
                    <p>Language: {c.language}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;