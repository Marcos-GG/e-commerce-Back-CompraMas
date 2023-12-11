import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Admin from "./views/Admin/Admin";
import DetailProduct from "./views/DetailProduct/DetailProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="admin" element={<Admin />} />
        <Route exact path="detail/:id" element={<DetailProduct />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
