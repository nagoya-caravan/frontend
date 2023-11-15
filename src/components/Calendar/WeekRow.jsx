import { Box } from "@mui/material";
import DetailModal from "./DetailModal";
const WeekRow = (props) => {
  const { year, month, week } = props;
  //  {year} {month + 1}

  //ここでapiからデータを取得
  return (
    <Box sx={{border:"2px #999 solid", margin:"0 0 -2px"}}>
      <Box display={{ xs: "none", md: "flex" }}>
            {week.map((day) => (
              <Box
                key={day.date}
                sx={{
                  aspectRatio: "1 / 1",
                  border: "1px #ccc solid",
                  width: "40%",
                }}
              >
                <Box sx={{padding:"10px 0 0 10px"}}>{day.date}</Box>

                <Box sx={{textAlign:"center"}}>
                  <DetailModal />
                </Box>
              </Box>
            ))}
      </Box>
    </Box>  
      );
    };

export default WeekRow;
