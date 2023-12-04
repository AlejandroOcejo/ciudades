export default function getCityInfo(postalCode) {
    const apiUrl = `http://api.zippopotam.us/es/${postalCode}`;

    if (postalCode === '') {
        return ("Error fetching city info")
    } else {
        return fetch(apiUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("fetch error");
                }
                return res.json();
            })
            .then(response => {
                const { places = [] } = response;
                const cityInfo = places.map(place => {
                    const { "place name": place_name, longitude, state, "state abbreviation": state_abbreviation, latitude } = place;
                    return { place_name, longitude, state, state_abbreviation, latitude };
                });
                return cityInfo;
            })
            .catch(error => {
                throw new Error("Error fetching city info");
            });
    }

}
