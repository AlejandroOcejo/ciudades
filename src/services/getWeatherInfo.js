import getCityInfo from "./getCityInfo";

export default async function getWeatherInfo(postalCode) {
    const cityLocation = await getCityInfo(postalCode);
    const { longitude, latitude } = cityLocation[0];
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { hourly } = response;
            if (hourly) {
                const { time, temperature } = hourly;
                const weatherInfo = time.map((timestamp, index) => ({
                    time: timestamp,
                    temperature: temperature[index],
                }));
                /* console.log(weatherInfo); */
                return weatherInfo;
            }
        });
}