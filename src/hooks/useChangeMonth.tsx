import { Box, Button } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";

export const ChangeMonth = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().startOf("month"));

  //進むボタン
  const handleNextMonth = () => {
    setCurrentMonth((prev) => prev.clone().add(1, "month"));
  };
  //戻るボタン
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => prev.clone().subtract(1, "month"));
  };
  return { currentMonth, setCurrentMonth, handleNextMonth, handlePrevMonth };
};
