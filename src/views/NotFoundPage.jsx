import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box>
      <Typography>404 Not Found</Typography>
      <Box>
        <Typography>お探しのページは見つかりませんでした</Typography>
      </Box>
      <Box>
        <Button>
          <Link href='/'>トップページへ</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
