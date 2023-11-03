import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import getWeatherInfo from '../../services/getWeatherInfo';

export default function CityWeatherDisplay({ postalCode }) {
    const [weatherData, setWeatherData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        getWeatherInfo(postalCode).then((data) => setWeatherData(data));
    }, [postalCode]);

    useEffect(() => {
        const updateChart = (data) => {
            const ctx = document.getElementById('weatherChart');

            if (chartRef.current) {
                chartRef.current.destroy();
            }

            if (ctx) {
                chartRef.current = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.map((entry) => entry.time),
                        datasets: [
                            {
                                label: 'Temperature',
                                data: data.map((entry) => entry.temperature),
                                borderColor: 'rgba(75, 192, 192, 1)',
                                fill: false,
                            },
                        ],
                    },
                });
            }
        };

        updateChart(weatherData);

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [weatherData]);

    return (
        <div>
            <canvas id="weatherChart" width="400" height="200"></canvas>
        </div>
    );
}
