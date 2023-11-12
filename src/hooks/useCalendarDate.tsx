import { Box, Button } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";

const useCalendarDate = () => {
  const [currentYearMonth, setCurrentYearMonth] = useState(moment());
  const handleNextMonth = () => {
    setCurrentYearMonth(currentYearMonth.clone().add(1, "months"));
  };
  const handlePrevMonth = () => {
    setCurrentYearMonth(currentYearMonth.clone().subtract(1, "months"));
  };
  return { currentYearMonth, handleNextMonth, handlePrevMonth };
};

export default useCalendarDate;
