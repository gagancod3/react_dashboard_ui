import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import FilterSection from "./searchPageSection/FilterSection.jsx";
import TableSection from "./searchPageSection/TableSection.jsx";
import StackedBarChart from "./searchPageSection/StackedChartSection.jsx";

import tableData from "../JSON_data/revenueData.json";

export default function Search() {
  // 🔹 Filter state (controlled)
  const [company, setCompany] = useState("");
  const [state, setState] = useState("");
  const [program, setProgram] = useState("");

  // 🔹 Applied table rows
  const [tableRows, setTableRows] = useState([]);

  // 🔹 Handlers
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
    setState("");
    setProgram("");
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setProgram("");
  };

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  };

  const handleApply = () => {
    if (!company || !state || !program) {
      setTableRows([]);
      return;
    }

    // Find matching data from JSON based on selected filters
    const matched = tableData.find(
      (d) =>
        d.companyId === company &&
        d.stateId === state &&
        d.program === program
    );

    // setTableRows(matched?.rows || []);
    setTableRows(matched || null);

  };
  console.log('tableRows ',tableRows);

  return (
    <Box
      component="main"
      sx={{
        ml: 3,
        mb: 3,
        p: 3,
        width: "95%",
      }}
    >
      {/* Title */}
      <Grid container justifyContent="center">
        <Typography variant="h4" gutterBottom>
          Search Results
        </Typography>
      </Grid>

      {/* Filters */}
      <Grid container spacing={3} alignItems="center" sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}> 
          {/* Passing props to the FilterSection component */}
          <FilterSection
            company={company}
            state={state}
            program={program}
            onCompanyChange={handleCompanyChange}
            onStateChange={handleStateChange}
            onProgramChange={handleProgramChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            onClick={handleApply}
            disabled={!company || !state || !program}
          >
            APPLY
          </Button>
        </Grid>
      </Grid>

      {/* Table */}
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12}>
          {/* <TableSection rows={tableRows} /> */}
          <TableSection 
          companyName={tableRows?.companyName}
          stateName={tableRows?.stateName}
          program={tableRows?.program}
          rows={tableRows.rows || []}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <StackedBarChart />
        </Grid>
      </Grid>
    </Box>
  );
}
