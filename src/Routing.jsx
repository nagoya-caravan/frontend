import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";
import CalenderList from "./views/CalendarList";
import SideBar2 from "./components/SideBar2";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/list" element={<CalenderList />} />
      <Route path="/sidebar" element={<SideBar2 />}></Route>
    </Routes>
  );
};

export default Routing;
