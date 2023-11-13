import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";
import SideBar from "./components/SideBar";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route path="/" element={<TopPage />} />
        <Route path="/list" element={<CalenderList />} />
      </Route>

    </Routes>
  );
};

export default Routing;
