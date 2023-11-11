import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
    </Routes>
  );
};

export default Routing;
