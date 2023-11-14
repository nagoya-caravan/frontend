import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";
import SideBar from "./components/SideBar";
import CalendarPage from "./views/CalendarPage";
import { TeamCard } from "./components/TeamCard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/" element={<SideBar />}>
        <Route path="/list" element={<CalenderList />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/test" element={<TeamCard />} />

        {/* <Route path='/list/:id' element={<Calender />} /> */}
      </Route>
    </Routes>
  );
};

export default Routing;
