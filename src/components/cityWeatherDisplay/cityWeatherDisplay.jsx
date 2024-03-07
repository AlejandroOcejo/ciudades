import React, { useEffect, useState, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import { WeatherInfoContext, useWeatherInfoContext } from '../../context/WeatherInfoContext';

export default function CityWeatherDisplay() {
    const [weatherData, setWeatherData] = useState([]);
    const chartRef = useRef(null);
    const { weatherInfoContext } = useWeatherInfoContext()

    useEffect(() => {
        try {
            setWeatherData(weatherInfoContext)
        } catch (error) {
            setWeatherData([])
        }
    }, [weatherInfoContext]);

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
                                borderColor: 'rgba(36, 169, 255, 0.67)',
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