import {
  Box,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Stack,
} from "@mui/material";
import filterData from "../../JSON_data/filtersData.json";

export default function FilterSection({
  company,
  state,
  program,
  onCompanyChange,
  onStateChange,
  onProgramChange,
}) {
  const selectedCompany = filterData.find((c) => c.companyId === company);
  const selectedState = selectedCompany?.states.find(
    (s) => s.stateId === state
  );

  return (
    <Box>
      <Stack direction="row" spacing={3}>
        
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Company</InputLabel>
          <Select
            value={company}
            label="Company"
            onChange={onCompanyChange}
          >
            {filterData.map((c) => (
              <MenuItem key={c.companyId} value={c.companyId}>
                {c.companyName}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>First filter</FormHelperText>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 160 }} disabled={!company}>
          <InputLabel>State</InputLabel>
          <Select value={state} label="State" onChange={onStateChange}>
            {selectedCompany?.states.map((s) => (
              <MenuItem key={s.stateId} value={s.stateId}>
                {s.stateName}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Second filter</FormHelperText>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 160 }} disabled={!state}>
          <InputLabel>Program</InputLabel>
          <Select
            value={program}
            label="Program"
            onChange={onProgramChange}
          >
            {selectedState?.programs.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Third filter</FormHelperText>
        </FormControl>
      </Stack>
    </Box>
  );
}
