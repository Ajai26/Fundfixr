import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Location 1', revenue: 100000, users: 5000 },
  { name: 'Location 2', revenue: 150000, users: 7000 },
  { name: 'Location 3', revenue: 120000, users: 6000 },
];

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/india-states-and-union-territories.topo.json';

const Insightsdashboard = () => {
  return (
    <div id='insights' className="insights-dashboard">
      <h1>Insights Dashboard</h1>
      <ComposableMap data-tip="">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#D6D6DA" />
            ))
          }
        </Geographies>
      </ComposableMap>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
        <Bar dataKey="users" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Insightsdashboard;