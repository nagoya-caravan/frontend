import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";
import CalendarPage from "./views/CalendarPage";
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path='/list' element={<CalenderList />} />
      <Route path='/calendar' element={<CalendarPage />} />
    </Routes>
  );
};

export default Routing;
