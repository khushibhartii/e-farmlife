// src/components/WeatherCard.jsx
import React, { useState } from 'react';
import Weather from './Weather';

const WeatherCard = () => {
  const [location, setLocation] = useState('New York');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
        style={styles.input}
      />
      <Weather location={location} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '400px',
    margin: 'auto',
  },
  input: {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '80%',
    maxWidth: '300px',
  },
};

export default WeatherCard;
