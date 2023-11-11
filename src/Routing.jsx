import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path='/list' element={<CalenderList />} />
    </Routes>
  );
};

export default Routing;
