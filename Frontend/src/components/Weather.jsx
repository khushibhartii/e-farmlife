// src/components/Weather.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'd8839d4c3561cf4ac9b8b3c815d77039';
const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=`;

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}${location}`);
        setWeather(response.data);
        setError(null);
      } catch (err) {
        setError('Unable to fetch weather data');
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!weather || !weather.current) return <p>No weather data available</p>;

  const { temperature, weather_icons, weather_descriptions, humidity, wind_speed } = weather.current;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Weather in {location}</h2>
        <img src={weather_icons[0]} alt={weather_descriptions[0]} style={styles.icon} />
        <p><strong>Temperature:</strong> {temperature}°C</p>
        <p><strong>Description:</strong> {weather_descriptions[0]}</p>
        <p><strong>Humidity:</strong> {humidity}%</p>
        <p><strong>Wind Speed:</strong> {wind_speed} km/h</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0', // Optional: for better contrast
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: 'white', // Optional: to make the card stand out
  },
  icon: {
    width: '100px',
    height: '100px',
  },
};

export default Weather;
