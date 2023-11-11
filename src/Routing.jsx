import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";
import Calender from "./views/Calendar";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path='/list' element={<CalenderList />} />
      <Route path='/calendar' element={<Calender />} />
    </Routes>
  );
};

export default Routing;
