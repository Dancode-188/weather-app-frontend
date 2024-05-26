// src/pages/Forecast.jsx
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { TwitterShareButton, FacebookShareButton } from 'react-share';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ForecastList from '../components/ForecastList';
import ForecastGraph from '../components/ForecastGraph';
import { getForecastData, getSunriseSunsetData, getMoonPhaseData, getHistoricalAverages } from '../services/weatherService';
import './Forecast.scss';

const Forecast = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [forecastData, setForecastData] = useState(null);
  const [sunriseSunsetData, setSunriseSunsetData] = useState(null);
  const [moonPhaseData, setMoonPhaseData] = useState(null);
  const [historicalAverages, setHistoricalAverages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const forecast = await getForecastData(selectedDate);
        setForecastData(forecast);

        const sunriseSunset = await getSunriseSunsetData(selectedDate);
        setSunriseSunsetData(sunriseSunset);

        const moonPhase = await getMoonPhaseData(selectedDate);
        setMoonPhaseData(moonPhase);

        const averages = await getHistoricalAverages(selectedDate);
        setHistoricalAverages(averages);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  /*const handleShareForecast = () => {
    const shareUrl = window.location.href;
    const shareText = `Check out the weather forecast for ${format(selectedDate, 'MMMM d, yyyy')}`;

    // Open share dialog for Twitter
    window.open(
      `https://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      '_blank'
    );
  };*/

  const handleExportPDF = async () => {
    const forecastElement = document.querySelector('.forecast-page');
    const canvas = await html2canvas(forecastElement);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save(`forecast_${format(selectedDate, 'yyyy-MM-dd')}.pdf`);
  };

  return (
    <div className="forecast-page">
      <main className="container">
        <h2>Detailed Forecast</h2>
        <div className="date-selector">
          <input
            type="date"
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
        </div>
        <div className="forecast-content">
          {forecastData ? (
            <>
              <ForecastList forecastData={forecastData} />
              <div className="forecast-description">
                <p>{forecastData.description}</p>
              </div>
              <div className="forecast-graph">
                <ForecastGraph forecastData={forecastData} />
              </div>
              <div className="forecast-imagery">
                <img src={forecastData.imageUrl} alt="Weather Imagery" />
              </div>
            </>
          ) : (
            <p>Loading forecast data...</p>
          )}
        </div>
        <div className="sidebar">
          {sunriseSunsetData && (
            <div className="sunrise-sunset">
              <p>Sunrise: {sunriseSunsetData.sunrise}</p>
              <p>Sunset: {sunriseSunsetData.sunset}</p>
            </div>
          )}
          {moonPhaseData && (
            <div className="moon-phase">
              <p>Moon Phase: {moonPhaseData.phase}</p>
            </div>
          )}
          {historicalAverages && (
            <div className="historical-averages">
              <p>
                Historical Averages: Temperature {historicalAverages.temperature}°C, Precipitation {historicalAverages.precipitation}mm
              </p>
            </div>
          )}
        </div>
      </main>
      <div className="share-export">
        <TwitterShareButton url={window.location.href} title={`Check out the weather forecast for ${format(selectedDate, 'MMMM d, yyyy')}`}>
          Share on Twitter
        </TwitterShareButton>
        <FacebookShareButton url={window.location.href} quote={`Check out the weather forecast for ${format(selectedDate, 'MMMM d, yyyy')}`}>
          Share on Facebook
        </FacebookShareButton>
        <button onClick={handleExportPDF}>Export as PDF</button>
      </div>
    </div>
  );
};

export default Forecast;