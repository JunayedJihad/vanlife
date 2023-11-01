import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans,{loader as vansLoader} from "./pages/Vans";
import Vandetails from "./pages/Vandetails";
import Layout from "./components/Layout";
import Income from './components/Income';
import Review from './components/Review';
import HostLayout from "./components/HostLayout";
import Dashboard from "./components/Dashboard";
import Myvans from "./components/Myvans";
import MyVanDetails from './pages/MyVanDetails';
import Pricing from './components/Pricing';
import Photos from './components/Photos';
import HostVanInfo from "./components/HostVanInfo";
import Error from "./pages/Error";


const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="my-vans" element={<Myvans />} />
      <Route path="my-vans/:id" element={<MyVanDetails />}>
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos" element={<Photos />} />
      </Route>
      <Route path="review" element={<Review />} />
    </Route>
    <Route path="about" element={<About />} />
    <Route path="vans" loader={vansLoader} errorElement={<Error/>} element={<Vans />} />
    <Route path="vans/:id" element={<Vandetails />} />
    <Route path='*' element={<Error/>} />
  </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
