import moment from "moment";
import { useEffect, useState } from "react";

const useYearMonth = () => {
  const [currentYearMonth, setCurrentYearMonth] = useState(moment());
  const handleNextMonth = () => {
    setCurrentYearMonth(currentYearMonth.clone().add(1, "months"));
  };
  const handlePrevMonth = () => {
    setCurrentYearMonth(currentYearMonth.clone().subtract(1, "months"));
  };

  const handleNextYear = () => {
    setCurrentYearMonth(currentYearMonth.clone().add(1, "years"));
  };
  const handlePrevYear = () => {
    setCurrentYearMonth(currentYearMonth.clone().subtract(1, "years"));
  };

  return {
    currentYearMonth,
    handleNextMonth,
    handlePrevMonth,
    handleNextYear,
    handlePrevYear,
  };
};

export default useYearMonth;
