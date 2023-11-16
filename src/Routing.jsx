import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";
import SideBar from "./components/SideBar";
import CalendarPage from "./views/CalendarPage";
import NotFound from "./views/NotFoundPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/" element={<SideBar />}>
        <Route path="/list" element={<CalenderList />} />
        <Route path="/calendar" element={<CalendarPage />} />

        {/* <Route path='/list/:id' element={<Calender />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
