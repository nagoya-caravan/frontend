import { Routes, Route } from "react-router-dom";
import TopPage from "./views/TopPage";

const routing = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
    </Routes>
  );
};

export default routing;
