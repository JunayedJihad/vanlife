import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Vandetails from "./pages/Vandetails";
import Layout from "./components/Layout";
import Income from './components/Income';
import Review from './components/Review';
import HostLayout from "./components/HostLayout";
import Dashboard from "./components/Dashboard";


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income/>} />
            <Route path="review" element={<Review/>} />
          </Route>
          <Route path="about" element={<About/>} />
          <Route path="vans" element={<Vans/>} />
          <Route path="vans/:id" element={<Vandetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
