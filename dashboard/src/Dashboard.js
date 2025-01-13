import React from 'react';
import { Pie, Bubble, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const pieData = {
    labels: ['King', 'Snohomish', 'Others'],
    datasets: [
      {
        label: 'Percentage',
        data: [53, 12, 36],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const tableauData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Tesla',
        data: [65, 59, 80, 81, 56],
        borderColor: '#FF6384',
        fill: false,
      },
      {
        label: 'Nissan',
        data: [28, 48, 40, 19, 86],
        borderColor: '#36A2EB',
        fill: false,
      },
    ],
  };

  const barData = {
    labels: ['Battery Electric Vehicle (BEV)', 'Plug-in Hybrid Electric Vehicle (PHEV)', 'Others'],
    datasets: [
      {
        label: 'Percentage',
        data: [76, 20, 4],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      },
    ],
  };

  const waterfallData = {
    labels: ['Clean Alternative Fuel Vehicle Eligible', 'ReEligibility unknown as battery range has not been researched', 'Others'],
    datasets: [
      {
        label: 'Waterfall',
        data: [46, 42, 12],
        backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const bubbleData = {
    labels: ['Seattle', 'Bellevue', 'Others'],
    datasets: [
      {
        label: 'Bubble Dataset',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 25 },
        ],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div>
      {/* Header Section */}
      <header style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginBottom: '20px',
      }}>
        <h1>Electric Vehicle Dashboard</h1>
        <p>An Overview of EV Population and Trends</p>
      </header>

      {/* Dashboard Section */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        <div style={{ width: '400px', textAlign: 'center' }}>
          <h2>Country</h2>
          <Pie data={pieData} />
        </div>

        <div style={{ width: '400px', textAlign: 'center' }}>
          <h2>Make</h2>
          <Line data={tableauData} />
        </div>

        <div style={{ width: '500px', textAlign: 'center' }}>
          <h2>Electric Vehicle Type</h2>
          <Bar data={barData} />
        </div>

        <div style={{ width: '500px', textAlign: 'center' }}>
          <h2>Clean Alternative Fuel Vehicle (CAFV) Eligibility</h2>
          <Bar data={waterfallData} />
        </div>

        <div style={{ width: '400px', textAlign: 'center' }}>
          <h2>City</h2>
          <Bubble data={bubbleData} />
        </div>
      </div>

      {/* Footer Section */}
      <footer style={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        marginTop: '20px',
      }}>
        <p>© 2025 Electric Vehicle Insights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;


