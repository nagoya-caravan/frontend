import { Box, Typography } from "@mui/material";


const TopPage = () => {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant='h4'>LeafSchedule</Typography>

        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            p: 2,
          }}

        ></Box>
      </Box>
    </>
  );
};

export default TopPage;
