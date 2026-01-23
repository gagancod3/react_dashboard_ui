// components/Dashboard.jsx
import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import FilterDropdowns from './FilterDropdowns';
import BarChartComponent from './BarChart';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chartData, setChartData] = useState([]); // Initial empty or default data
  const user = { name: 'John Doe', avatar: '/path/to/avatar.jpg' }; // Mock user data

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const handleDataUpdate = (data) => setChartData(data);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar onMenuClick={handleSidebarToggle} user={user} />
        <Container sx={{ mt: 4 }}>
          <FilterDropdowns onDataUpdate={handleDataUpdate} />
          <BarChartComponent data={chartData} />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;