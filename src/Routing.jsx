import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";
import SideBar from "./components/SideBar";
import CalendarPage from "./views/CalendarPage";
import NotFound from "./views/NotFoundPage";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path='/calendar' element={<SideBar />}>
        <Route path='list' element={<CalenderList />} />
        <Route path=':calendar_id' element={<CalendarPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
