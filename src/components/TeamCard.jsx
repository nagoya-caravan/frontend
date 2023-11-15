import { CardContent, CardMedia, Grid, Typography, Paper, Box } from "@mui/material";
import React from "react";
import picture from "../assets/img/picture1.jpg";
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const TeamCard = () => {
  return (
    <>
    <Box>
      {/* タイトル */}
      <Typography variant="h3" sx={{ ml: 2 }}>
        Team
      </Typography>

      {/* グリッドコンテナ */}
      <Grid
        container
        spacing={2}
        sx={{
          padding: "20px",
        }}
      >
        {/* マップ関数でカードを生成 */}
        {[1, 2, 3, "Test"].map((item, index) => (
          <Grid item xs={3} key={index}>
            
            {/* カードのペーパーコンポーネント */}
            <Paper
              elevation={5}
              style={{ borderRadius: "8px", backgroundColor: "white" }}
            >
              <Typography sx={{fontSize:"40px", margin:"0 0 -60px 10px", position:"relative", zIndex:2, color:"white"}}>
                {item}              
              </Typography>
              <Box sx={{textAlign:"right", margin:"0 30px -20px 0"}}>
                <CloseIcon sx={{ display:"inline-block", position:"absolute",  color:"white"}}/>
              </Box>
              
                
              
              
              {/* カードメディア */}
              <CardMedia
                component="img"
                height="150"
                src={picture}
                alt={`Card Image ${item}`}
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              {/* カードコンテンツ */}
              <CardContent>
                {/* 日付 */}
                <Typography>
                  日付： {"2023/11/15"}
                </Typography>
                {/* カードタイトル */}
                <Typography variant="h6" >
                  予定内容： {item}
                </Typography>
                {/* カード詳細 */}
                <Typography variant="h7" color="textSecondary">
                  公開：<input type="checkbox" style={{lineHeight:0}}/>
                </Typography>
                <Box sx={{textAlign:"right"}}>
                  <button type="submit" style={{ display:"inline-block", position:"relative" }}>設定</button>

                </Box>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>  
    </>
  );
};
