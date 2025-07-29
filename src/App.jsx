import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', pv: 4000, uv: 2400 },
  { name: 'Feb', pv: 3000, uv: 1398 },
  { name: 'Mar', pv: 2000, uv: 9800 },
  { name: 'Apr', pv: 2780, uv: 3908 },
  { name: 'May', pv: 1890, uv: 4800 },
  { name: 'Jun', pv: 2390, uv: 3800 },
  { name: 'Jul', pv: 3490, uv: 4300 }
];

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Monthly Performance Trends</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="pv" 
            stroke="#8884d8" 
            strokeWidth={3}
            dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
            name="Page Views" 
          />
          <Line 
            type="monotone" 
            dataKey="uv" 
            stroke="#82ca9d" 
            strokeWidth={3}
            dot={{ fill: '#82ca9d', strokeWidth: 2, r: 4 }}
            name="Unique Visitors" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;