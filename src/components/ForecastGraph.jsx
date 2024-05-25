// src/components/ForecastGraph.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ForecastGraph.scss';

const ForecastGraph = ({ forecastData }) => {
  const data = forecastData.map((item) => ({
    date: item.date,
    temperature: item.temperature,
    precipitation: item.precipitation,
  }));

  return (
    <div className="forecast-graph">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" />
          <Line yAxisId="right" type="monotone" dataKey="precipitation" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastGraph;