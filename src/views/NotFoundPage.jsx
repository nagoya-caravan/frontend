import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant='h2'>404 Not Found</Typography>
      <Box>
        <Typography
          variant='h4'
          sx={{
            mt: 2,
            mb: 4,
          }}
        >
          お探しのページは見つかりませんでした
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "30%",
        }}
      >
        <Box>
          <Link to='/'>
            <Button variant='outlined' color='success'>
              トップページに戻る
            </Button>
          </Link>
        </Box>

        <Box>
          <Link to='/list'>
            <Button variant='outlined' color='success'>
              カレンダー編集
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
