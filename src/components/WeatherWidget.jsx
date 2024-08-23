import React, { useEffect, useState } from 'react'
import styles from './WeatherWidget.module.css'
import { fetchWeather } from '../api/fetchWeather'
import formatDate from '../utils/formatDate';
function WeatherWidget() {
    const [weatherData, setWeatherData] = useState();
   
    useEffect(() => {
        fetchWeather().then((data) => {
            const { temp_c, condition, pressure_mb, wind_kph, humidity } = data.current;
            setWeatherData({
                temperature: temp_c,
                condition: condition.text,
                pressure: pressure_mb,
                wind: wind_kph,
                thumbnail: condition.icon,
                humidity,
            })
        });
    }, []);
          
    const {date,time} = formatDate();
  

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                
                <div>{date}</div>
                <div>{time}</div>
                
            </div>
            <div className={styles.content}>{weatherData ? (
                <>
                    <img
                        className={styles.thumbnail}
                        src={weatherData.thumbnail}
                        alt="weather"
                    />
                    <div className={styles.temperature}>
                        {weatherData.temperature}°C
                    </div>
                    <div className={styles.condition}>{weatherData.condition}</div>
                    <div className={styles.details}>
                        <div className={styles.detail}>
                            <span>Pressure:</span>
                            <span>{weatherData.pressure}mb</span>
                        </div>
                        <div className={styles.detail}>
                            <span>Wind:</span>
                            <span>{weatherData.wind}kph</span>
                        </div>
                        <div className={styles.detail}>
                            <span>Humidity :</span>
                            <span>{weatherData.humidity} %</span>
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}

            </div>
        </div>
    )
}

export default WeatherWidget;
