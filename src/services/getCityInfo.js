export default function getCityInfo(postalCode = '50015') {
    const apiUrl = `http://api.zippopotam.us/es/${postalCode}`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { places = [] } = response;
            if (Array.isArray(places)) {
                const cityInfo = places.map(place => {
                    const { "place name": place_name, longitude, state, "state abbreviation": state_abbreviation, latitude, } = place;
                    return { place_name, longitude, state, state_abbreviation, latitude };
                });
                return cityInfo;
            }
        });
}