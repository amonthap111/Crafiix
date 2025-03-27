import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Template from "./page/Template";
import Layout from "./Component/Layout";
import "./assets/Css/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Template" element={<Template />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
