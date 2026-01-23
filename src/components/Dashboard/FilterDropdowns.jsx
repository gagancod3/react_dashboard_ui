// components/FilterDropdowns.jsx
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import AccrualData from '../../JSON_data/DummyData.json';

const FilterDropdowns = ({ onDataUpdate }) => {
  const [filters, setFilters] = useState({ filter1: '', filter2: '', filter3: '' });

  console.log('Data', AccrualData);

  const handleChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/data', filters); // Replace with your API endpoint
      onDataUpdate(response.data); // Pass data to parent for chart update
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Filter 1</InputLabel>
        <Select name="filter1" value={filters.filter1} onChange={handleChange}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Filter 2</InputLabel>
        <Select name="filter2" value={filters.filter2} onChange={handleChange}>
          <MenuItem value="optionA">Option A</MenuItem>
          <MenuItem value="optionB">Option B</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Filter 3</InputLabel>
        <Select name="filter3" value={filters.filter3} onChange={handleChange}>
          <MenuItem value="typeX">Type X</MenuItem>
          <MenuItem value="typeY">Type Y</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>Apply Filters</Button>
    </Box>
  );
};

export default FilterDropdowns;