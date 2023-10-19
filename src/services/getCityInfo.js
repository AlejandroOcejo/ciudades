
export default function getCityInfo({ keyword } = {}) {
    const apiUrl = `https://api.zippopotam.us/es/${keyword}`;

    return (
        fetch(apiUrl)
            .then(res => res.json())
            .then(response => {
                const { places = [] } = response
                if (Array.isArray(places)) {
                    const cityInfo = places.map(places => {
                        const { place_name, state, latitude } = places
                        return { place_name, state, latitude }
                    })
                    return cityInfo
                }
            })
    )

}