import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Avatar,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { IoHourglassOutline } from "react-icons/io5";
import BoltIcon from "@mui/icons-material/Bolt";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const jobData = [
  {
    name: "Ema",
    position: "Software Productivity Engineer",
    location: "Bangalore",
    salary: "₹15 - 50 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 5,
  },
  {
    name: "John",
    position: "Frontend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },

  {
    name: "John",
    position: "Frontend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },

  {
    name: "John",
    position: "Frontend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },

  {
    name: "John",
    position: "Frontend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },

  {
    name: "John",
    position: "Frontend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },
  {
    name: "John",
    position: "Frontend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },

  {
    name: "Abhishek",
    position: "Frontend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },


  {
    name: "Aditya",
    position: "Backend Developer",
    location: "San Francisco",
    salary: "₹20 - 60 LPA",
    companyDescription:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    companyDetails:
      "A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective.",
    experience: 3,
  },
  // Add more job objects as needed...
];

export default function JobCardList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(0);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setSelectedRole(role);
    console.log("Selected Role:", role);
  };
  

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  const [minimumBasePay, setMinimumBasePay] = useState(0);

  const handleMinimumBasePayChange = (event) => {
    setMinimumBasePay(event.target.value);
  };


const filteredJobs = jobData.filter((job) => {
    // Check if selectedRole is empty or matches the job's position
    return (
      (selectedRole === "" || job.position.toLowerCase() === selectedRole.toLowerCase())
      && job.position.toLowerCase().includes(searchTerm.toLowerCase())
      && (selectedExperience === 0 || job.experience === selectedExperience)
      && (minimumBasePay === 0 || parseInt(job.salary.replace(/\D/g, "")) >= minimumBasePay)
    );
  });

  return (
    <div>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        // justifyContent="center"
        // alignItems="center"
        // flexWrap="wrap"
        // gap={1}
        sx={{ml:1,mr:1,mt:1, mb:2}}
      >
        <TextField
          id="search"
          label="Search by Company Name"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          sx={{
            mb: { xs: 0, sm: 0 },
            mr: { xs: 0, sm: 2 },

            // width: { xs: "100%", sm: "auto" },

          }}
        />
        <FormControl
          fullWidth
          sx={{
            mt: { xs: 2, sm: 0 },
            mr: { xs: 0, sm: 2 },
            // width: { xs: "100%", sm: "auto" },
          }}
        >
        <Select
        label=""
        value={selectedRole}
        onChange={handleRoleChange}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="">All Roles</MenuItem>
        <MenuItem value="Software Productivity Engineer">Software Productivity Engineer</MenuItem>
        <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
        <MenuItem value="Backend Developer">Backend Developer</MenuItem>
        {/* Add more roles as needed */}
      </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            mt: { xs: 2, sm: 0 },
            mr: { xs: 0, sm: 2 },
            // width: { xs: "100%", sm: "auto" },
          }}
        >
          <Select
            label=""
            value={selectedExperience}
            onChange={handleExperienceChange}
            variant="outlined"
            fullWidth
          >
            <MenuItem value={0}>All Experience</MenuItem>
            <MenuItem value={3}>3 years</MenuItem>
            <MenuItem value={5}>5 years</MenuItem>
            {/* Add more experience levels as needed */}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{ mt: { xs: 2, sm: 0 } }}
        >
          <Select
            label=""
            value={minimumBasePay}
            onChange={handleMinimumBasePayChange}
            variant="outlined"
            fullWidth
          >
            <MenuItem value={0}>All Base Pay</MenuItem>
            <MenuItem value={15}>15 LPA</MenuItem>
            <MenuItem value={20}>20 LPA</MenuItem>
            {/* Add more minimum base pay options as needed */}
          </Select>
        </FormControl>
      </Box>

      <Grid container sx={{ display: "flex" }} spacing={1}>
        {filteredJobs.map((job, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={3}
            display="flex"
            justifyContent="center"
            flexGrow={1}
          >
            <RecipeReviewCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function RecipeReviewCard({ job }) {
  const {
    name,
    position,
    location,
    salary,
    companyDescription,
    companyDetails,
    experience,
  } = job;

  return (
    <Paper
      elevation={7}
      sx={{
        width: "310px",
        padding: "16px",
        borderRadius: "12px",
        mr: 1,
        ml: 1,
        mt: 1,
        mb: 1,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: "140px",
          p: 0.7,
          m: 1,
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <IoHourglassOutline style={{ fontSize: "20px" }} />{" "}
        <Typography fontSize="14px" className="pstedDate">
          {" "}
          Posted 6 days ago
        </Typography>
      </Paper>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Avatar variant="square">{name.charAt(0)}</Avatar>
        <Box display="flex" flexDirection="column" alignItems="start" ml={2}>
          <Typography
            sx={{ fontSize: "12px", color: "#8E8E8E", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>{position}</Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
            {location}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#4D5B6B",
          fontWeight: "bold",
          marginTop: "8px",
          marginBottom: "8px",
          textAlign: "start",
        }}
      >
        Estimated Salary: {salary}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "8px",
          textAlign: "start",
        }}
      >
        About Company:
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          marginBottom: "8px",
          textAlign: "start",
        }}
      >
        About us
      </Typography>
      <Typography
        sx={{ fontSize: "14px", textAlign: "start", marginBottom: "16px" }}
      >
        {companyDescription}
      </Typography>
      <Typography
        sx={{ fontSize: "14px", textAlign: "start", marginBottom: "16px" }}
      >
        {companyDetails}
      </Typography>
      <Button color="primary" sx={{ marginBottom: "12px", bottom: "30px" }}>
        View job
      </Button>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#8E8E8E",
          fontWeight: "bold",
          textAlign: "start",
        }}
      >
        Minimum Experience
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          marginBottom: "16px",
          textAlign: "start",
        }}
      >
        {experience} year's
      </Typography>
      <Button
        variant="contained"
        startIcon={<BoltIcon sx={{ color: "#F7BA34" }} />}
        style={{
          backgroundColor: "#54EFC2",
          color: "black",
          width: "100%",
          fontWeight: "bold",
          marginBottom: "12px",
          padding: "8px",
        }}
      >
        Easy Apply
      </Button>
      <Button
        variant="contained"
        startIcon={
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "30px", height: "30px" }}
              />
            </StyledBadge>

            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "30px", height: "30px", ml: 1 }}
              />
            </StyledBadge>
          </Box>
        }
        style={{
          backgroundColor: "#4943DA",
          color: "white",
          width: "100%",
          fontWeight: "bold",
          marginBottom: "12px",
          padding: "8px",
        }}
      >
        Unlock referral asks
      </Button>
    </Paper>
  );
}
